import React from "react";
import { Checkbox } from "@/base/components/ui/checkbox";
import { createColumnHelper } from "@tanstack/react-table";
import type { Table, Row } from "@tanstack/react-table";
import type {
  ColumnConfigInterface,
  TableConfigInterface,
} from "../../interfaces";
import { ActionsRenderer as actionsRenderer } from "../../actions";
import type { CustomColumnDef } from "./CustomColumnDef";

export interface HeaderInterface {
  table: Table<any>;
}

export interface RowInterface {
  row: Row<any>;
}

const useTableConfig = (tableConfig: TableConfigInterface) => {
  const columnHelper = createColumnHelper();
  return React.useMemo(() => {
    if (!tableConfig) {
      return {
        columns: [],
        resource: "",
      };
    }

    const {
      resource,
      identifierKey,
      columns: rawColumns,
      selectionType = "none",
      actions,
      filters,
    } = tableConfig;

    const columnsFromConfig = rawColumns.map((col: ColumnConfigInterface) => {
      return columnHelper.accessor(col.accessorKey, {
        meta: {
          align: col.align || undefined,
          fixed: col.fixed || false,
        },
        id: col.accessorKey,
        header: col.header,
        size: col.width || 150,
        maxSize: col.maxWidth || undefined,
        minSize: col.minWidth || undefined,
      } as CustomColumnDef<any, any>);
    });

    const selectionColumn = {
      id: "select",
      meta: {
        fixed: true,
      },
      header: ({ table }: HeaderInterface) => (
        <div className="le-flex le-h-full le-items-center le-justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      ),
      cell: ({ row }: RowInterface) => (
        <div className="le-flex le-h-full le-items-center le-justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              return row.toggleSelected(!!value);
            }}
            aria-label="Select row"
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
      size: 50,
      minSize: 50,
      maxSize: 50,
    };

    const finalColumns =
      selectionType === "none"
        ? columnsFromConfig
        : [selectionColumn, ...columnsFromConfig];

    if (actions) {
      const actionsColumn = {
        id: "actions",
        accessorKey: actions.header,
        meta: {
          align: actions?.align || undefined,
          fixed: actions?.fixed || false,
        },
        header: actions.header,
        cell: ({ row }: RowInterface) => {
          return actionsRenderer({
            actions: actions.options,
            row: row.original,
          });
        },
        enableSorting: false,
        enableHiding: false,
        size: actions?.width || 140,
        minSize: actions?.minWidth || 100,
        maxSize: actions?.maxWidth || 800,
      };
      finalColumns.push(actionsColumn);
    }

    return {
      columns: finalColumns,
      resource,
      identifierKey,
      hasSelection: true,
      filtersConfig: filters,
    };
  }, [tableConfig]);
};

useTableConfig.displayName = "useTableConfig";

export { useTableConfig };
