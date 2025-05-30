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
  composePaths,
  computeLabel,
  createDefaultValue,
} from "@jsonforms/core";
import map from "lodash/map";
import merge from "lodash/merge";
import range from "lodash/range";
import React, { useCallback, useState } from "react";
import { ArrayLayoutToolbar } from "./ArrayToolbar";
import ExpandPanelRenderer from "./ExpandPanelRenderer";

const MaterialArrayLayoutComponent = (
  props: ArrayLayoutProps & { translations: ArrayTranslations }
) => {
  const [expanded, setExpanded] = useState<string | boolean>(false);
  const innerCreateDefaultValue = useCallback(
    () => createDefaultValue(props.schema, props.rootSchema),
    [props.schema]
  );
  const handleChange = useCallback(
    (panel: string) => (_event: any, expandedPanel: boolean) => {
      setExpanded(expandedPanel ? panel : false);
    },
    []
  );
  const isExpanded = (index: number) =>
    expanded === composePaths(props.path, `${index}`);

  const {
    enabled,
    data,
    path,
    schema,
    uischema,
    errors,
    addItem,
    renderers,
    cells,
    label,
    required,
    rootSchema,
    config,
    uischemas,
    description,
    disableAdd,
    disableRemove,
    translations,
  } = props;
  const appliedUiSchemaOptions = merge({}, config, props.uischema.options);
  const doDisableAdd = disableAdd || appliedUiSchemaOptions.disableAdd;
  const doDisableRemove = disableRemove || appliedUiSchemaOptions.disableRemove;

  return (
    <div>
      <ArrayLayoutToolbar
        translations={translations}
        label={computeLabel(
          label,
          required,
          appliedUiSchemaOptions.hideRequiredAsterisk
        )}
        description={description}
        errors={errors}
        path={path}
        enabled={enabled}
        addItem={addItem}
        createDefault={innerCreateDefaultValue}
        disableAdd={doDisableAdd}
      />
      <div>
        {data > 0 ? (
          map(range(data), index => {
            return (
              <ExpandPanelRenderer
                enabled={enabled}
                index={index}
                expanded={isExpanded(index)}
                schema={schema}
                path={path}
                handleExpansion={handleChange}
                uischema={uischema}
                renderers={renderers}
                cells={cells}
                key={index}
                rootSchema={rootSchema}
                enableMoveUp={index != 0}
                enableMoveDown={index < data - 1}
                config={config}
                childLabelProp={appliedUiSchemaOptions.elementLabelProp}
                uischemas={uischemas}
                translations={translations}
                disableRemove={doDisableRemove}
              />
            );
          })
        ) : (
          <p>{translations.noDataMessage}</p>
        )}
      </div>
    </div>
  );
};

export const MaterialArrayLayout = React.memo(MaterialArrayLayoutComponent);
