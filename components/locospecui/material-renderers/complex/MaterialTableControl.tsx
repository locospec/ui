// @ts-nocheck
/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import {
  ArrayLayoutProps,
  ArrayTranslations,
  ControlElement,
  encode,
  errorAt,
  formatErrorMessage,
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  Paths,
  Resolve,
} from "@jsonforms/core";
import {
  DispatchCell,
  JsonFormsStateContext,
  useJsonForms,
} from "@jsonforms/react";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  FormHelperText,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import isEmpty from "lodash/isEmpty";
import range from "lodash/range";
import startCase from "lodash/startCase";
import union from "lodash/union";
import React, { Fragment, useMemo } from "react";

import { ErrorObject } from "ajv";
import merge from "lodash/merge";
import { WithDeleteDialogSupport } from "./DeleteDialog";
import NoBorderTableCell from "./NoBorderTableCell";
import TableToolbar from "./TableToolbar";

// we want a cell that doesn't automatically span
const styles = {
  fixedCell: {
    width: "150px",
    height: "50px",
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
  },
  fixedCellSmall: {
    width: "50px",
    height: "50px",
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
  },
};

const generateCells = (
  Cell: React.ComponentType<OwnPropsOfNonEmptyCell | TableHeaderCellProps>,
  schema: JsonSchema,
  rowPath: string,
  enabled: boolean,
  cells?: JsonFormsCellRendererRegistryEntry[]
) => {
  if (schema.type === "object") {
    return getValidColumnProps(schema).map(prop => {
      const cellPath = Paths.compose(rowPath, prop);
      const props = {
        propName: prop,
        schema,
        title: schema.properties?.[prop]?.title ?? startCase(prop),
        rowPath,
        cellPath,
        enabled,
        cells,
      };
      return <Cell key={cellPath} {...props} />;
    });
  } else {
    // primitives
    const props = {
      schema,
      rowPath,
      cellPath: rowPath,
      enabled,
    };
    return <Cell key={rowPath} {...props} />;
  }
};

const getValidColumnProps = (scopedSchema: JsonSchema) => {
  if (
    scopedSchema.type === "object" &&
    typeof scopedSchema.properties === "object"
  ) {
    return Object.keys(scopedSchema.properties).filter(
      prop => scopedSchema.properties[prop].type !== "array"
    );
  }
  // primitives
  return [""];
};

export interface EmptyTableProps {
  numColumns: number;
  translations: ArrayTranslations;
}

const EmptyTable = ({ numColumns, translations }: EmptyTableProps) => (
  <TableRow>
    <NoBorderTableCell colSpan={numColumns}>
      <Typography align="center">{translations.noDataMessage}</Typography>
    </NoBorderTableCell>
  </TableRow>
);

interface TableHeaderCellProps {
  title: string;
}

const TableHeaderCell = React.memo(function TableHeaderCell({
  title,
}: TableHeaderCellProps) {
  return <TableCell>{title}</TableCell>;
});

interface NonEmptyCellProps extends OwnPropsOfNonEmptyCell {
  rootSchema: JsonSchema;
  errors: string;
  path: string;
  enabled: boolean;
}
interface OwnPropsOfNonEmptyCell {
  rowPath: string;
  propName?: string;
  schema: JsonSchema;
  enabled: boolean;
  renderers?: JsonFormsRendererRegistryEntry[];
  cells?: JsonFormsCellRendererRegistryEntry[];
}
const ctxToNonEmptyCellProps = (
  ctx: JsonFormsStateContext,
  ownProps: OwnPropsOfNonEmptyCell
): NonEmptyCellProps => {
  const path =
    ownProps.rowPath +
    (ownProps.schema.type === "object" ? "." + ownProps.propName : "");
  const errors = formatErrorMessage(
    union(
      errorAt(
        path,
        ownProps.schema
      )(ctx.core).map((error: ErrorObject) => error.message)
    )
  );
  return {
    rowPath: ownProps.rowPath,
    propName: ownProps.propName,
    schema: ownProps.schema,
    rootSchema: ctx.core.schema,
    errors,
    path,
    enabled: ownProps.enabled,
    cells: ownProps.cells || ctx.cells,
    renderers: ownProps.renderers || ctx.renderers,
  };
};

const controlWithoutLabel = (scope: string): ControlElement => ({
  type: "Control",
  scope: scope,
  label: false,
});

interface NonEmptyCellComponentProps {
  path: string;
  propName?: string;
  schema: JsonSchema;
  rootSchema: JsonSchema;
  errors: string;
  enabled: boolean;
  renderers?: JsonFormsRendererRegistryEntry[];
  cells?: JsonFormsCellRendererRegistryEntry[];
  isValid: boolean;
}
const NonEmptyCellComponent = React.memo(function NonEmptyCellComponent({
  path,
  propName,
  schema,
  rootSchema,
  errors,
  enabled,
  renderers,
  cells,
  isValid,
}: NonEmptyCellComponentProps) {
  return (
    <NoBorderTableCell>
      {schema.properties ? (
        <DispatchCell
          schema={Resolve.schema(
            schema,
            `#/properties/${encode(propName)}`,
            rootSchema
          )}
          uischema={controlWithoutLabel(`#/properties/${encode(propName)}`)}
          path={path}
          enabled={enabled}
          renderers={renderers}
          cells={cells}
        />
      ) : (
        <DispatchCell
          schema={schema}
          uischema={controlWithoutLabel("#")}
          path={path}
          enabled={enabled}
          renderers={renderers}
          cells={cells}
        />
      )}
      <FormHelperText error={!isValid}>{!isValid && errors}</FormHelperText>
    </NoBorderTableCell>
  );
});

const NonEmptyCell = (ownProps: OwnPropsOfNonEmptyCell) => {
  const ctx = useJsonForms();
  const emptyCellProps = ctxToNonEmptyCellProps(ctx, ownProps);

  const isValid = isEmpty(emptyCellProps.errors);
  return <NonEmptyCellComponent {...emptyCellProps} isValid={isValid} />;
};

interface NonEmptyRowProps {
  childPath: string;
  schema: JsonSchema;
  rowIndex: number;
  moveUpCreator: (path: string, position: number) => () => void;
  moveDownCreator: (path: string, position: number) => () => void;
  enableUp: boolean;
  enableDown: boolean;
  showSortButtons: boolean;
  enabled: boolean;
  cells?: JsonFormsCellRendererRegistryEntry[];
  path: string;
  translations: ArrayTranslations;
  disableRemove?: boolean;
}

const NonEmptyRowComponent = ({
  childPath,
  schema,
  rowIndex,
  openDeleteDialog,
  moveUpCreator,
  moveDownCreator,
  enableUp,
  enableDown,
  showSortButtons,
  enabled,
  cells,
  path,
  translations,
  disableRemove,
}: NonEmptyRowProps & WithDeleteDialogSupport) => {
  const moveUp = useMemo(
    () => moveUpCreator(path, rowIndex),
    [moveUpCreator, path, rowIndex]
  );
  const moveDown = useMemo(
    () => moveDownCreator(path, rowIndex),
    [moveDownCreator, path, rowIndex]
  );
  return (
    <TableRow key={childPath} hover>
      {generateCells(NonEmptyCell, schema, childPath, enabled, cells)}
      {enabled ? (
        <NoBorderTableCell
          style={showSortButtons ? styles.fixedCell : styles.fixedCellSmall}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            {showSortButtons ? (
              <Fragment>
                <Grid item>
                  <Tooltip
                    id="tooltip-up"
                    title={translations.up}
                    placement="bottom"
                    open={enableUp ? undefined : false}
                  >
                    <IconButton
                      aria-label={translations.upAriaLabel}
                      onClick={moveUp}
                      disabled={!enableUp}
                      size="large"
                    >
                      <ArrowUpward />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip
                    id="tooltip-down"
                    title={translations.down}
                    placement="bottom"
                    open={enableDown ? undefined : false}
                  >
                    <IconButton
                      aria-label={translations.downAriaLabel}
                      onClick={moveDown}
                      disabled={!enableDown}
                      size="large"
                    >
                      <ArrowDownward />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Fragment>
            ) : null}
            {!disableRemove ? (
              <Grid item>
                <Tooltip
                  id="tooltip-remove"
                  title={translations.removeTooltip}
                  placement="bottom"
                >
                  <IconButton
                    aria-label={translations.removeAriaLabel}
                    onClick={() => openDeleteDialog(childPath, rowIndex)}
                    size="large"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            ) : null}
          </Grid>
        </NoBorderTableCell>
      ) : null}
    </TableRow>
  );
};
export const NonEmptyRow = React.memo(NonEmptyRowComponent);
interface TableRowsProp {
  data: number;
  path: string;
  schema: JsonSchema;
  uischema: ControlElement;
  config?: any;
  enabled: boolean;
  cells?: JsonFormsCellRendererRegistryEntry[];
  moveUp?(path: string, toMove: number): () => void;
  moveDown?(path: string, toMove: number): () => void;
  translations: ArrayTranslations;
  disableRemove?: boolean;
}
const TableRows = ({
  data,
  path,
  schema,
  openDeleteDialog,
  moveUp,
  moveDown,
  uischema,
  config,
  enabled,
  cells,
  translations,
  disableRemove,
}: TableRowsProp & WithDeleteDialogSupport) => {
  const isEmptyTable = data === 0;

  if (isEmptyTable) {
    return (
      <EmptyTable
        numColumns={getValidColumnProps(schema).length + 1}
        translations={translations}
      />
    );
  }

  const appliedUiSchemaOptions = merge({}, config, uischema.options);

  return (
    <React.Fragment>
      {range(data).map((index: number) => {
        const childPath = Paths.compose(path, `${index}`);

        return (
          <NonEmptyRow
            key={childPath}
            childPath={childPath}
            rowIndex={index}
            schema={schema}
            openDeleteDialog={openDeleteDialog}
            moveUpCreator={moveUp}
            moveDownCreator={moveDown}
            enableUp={index !== 0}
            enableDown={index !== data - 1}
            showSortButtons={
              appliedUiSchemaOptions.showSortButtons ||
              appliedUiSchemaOptions.showArrayTableSortButtons
            }
            enabled={enabled}
            cells={cells}
            path={path}
            translations={translations}
            disableRemove={disableRemove}
          />
        );
      })}
    </React.Fragment>
  );
};

export class MaterialTableControl extends React.Component<
  ArrayLayoutProps &
    WithDeleteDialogSupport & { translations: ArrayTranslations },
  any
> {
  addItem = (path: string, value: any) => this.props.addItem(path, value);
  render() {
    const {
      label,
      description,
      path,
      schema,
      rootSchema,
      uischema,
      errors,
      openDeleteDialog,
      visible,
      enabled,
      cells,
      translations,
      disableAdd,
      disableRemove,
      config,
    } = this.props;

    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const doDisableAdd = disableAdd || appliedUiSchemaOptions.disableAdd;
    const doDisableRemove =
      disableRemove || appliedUiSchemaOptions.disableRemove;

    const controlElement = uischema as ControlElement;
    const isObjectSchema = schema.type === "object";
    const headerCells: any = isObjectSchema
      ? generateCells(TableHeaderCell, schema, path, enabled, cells)
      : undefined;

    if (!visible) {
      return null;
    }

    return (
      <Table>
        <TableHead>
          <TableToolbar
            errors={errors}
            label={label}
            description={description}
            addItem={this.addItem}
            numColumns={isObjectSchema ? headerCells.length : 1}
            path={path}
            uischema={controlElement}
            schema={schema}
            rootSchema={rootSchema}
            enabled={enabled}
            translations={translations}
            disableAdd={doDisableAdd}
          />
          {isObjectSchema && (
            <TableRow>
              {headerCells}
              {enabled ? <TableCell /> : null}
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          <TableRows
            openDeleteDialog={openDeleteDialog}
            translations={translations}
            {...this.props}
            disableRemove={doDisableRemove}
          />
        </TableBody>
      </Table>
    );
  }
}
