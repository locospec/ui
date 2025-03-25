import { createContext, useRef } from "react";
import { useLensContext } from "@/main";
import type {
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableLensContextProviderInterface,
} from "./ContextInterfaces";
import { useTableConfig } from "../hooks/useTableConfig";
import { useColumnResize } from "../hooks/useColumnResize";
import { initialiseDnDSensors } from "../utils/initialiseDnDSensors";
import { useViewContext } from "@/components/Views/View";
import { initialiseDefaultDatatableValues } from "../utils/initialiseDefaultDatatableValues";
import { initialiseDefaultColumnsConfig } from "../utils/initialiseDefaultColumnsConfig";
import { initialiseDatatableStates } from "../utils/initialiseDatatableStates";

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined
);
DatatableContext.displayName = "DatatableContext";

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  columns,
  selectedItems,
  viewChildRef,
  ...props
}) => {
  const { defaultColPinning, defaultColShow, tableSelectedItems } =
    initialiseDefaultDatatableValues(selectedItems);

  const { defaultColOrder, fixedColumns } = initialiseDefaultColumnsConfig(
    columns,
    defaultColShow,
    defaultColPinning
  );

  const {
    selectedRows,
    setSelectedRows,
    columnVisibility,
    setColumnVisibility,
    columnPining,
    setColumnPining,
    activeId,
    setActiveId,
    isInResizeArea,
    setIsInResizeArea,
    columnOrder,
    setColumnOrder,
  } = initialiseDatatableStates({
    tableSelectedItems,
    defaultColShow,
    defaultColPinning,
    defaultColOrder,
  });

  const tableContainerRef = viewChildRef || useRef<HTMLDivElement>(null);
  const { adjustedColumns, isColumnsReady } = useColumnResize(
    tableContainerRef,
    columns,
    0
  );

  return (
    <DatatableContext.Provider
      value={{
        selectedRows,
        setSelectedRows,
        tableContainerRef,
        columnVisibility,
        setColumnVisibility,
        columnPining,
        setColumnPining,
        activeId,
        setActiveId,
        isInResizeArea,
        setIsInResizeArea,
        columns,
        columnOrder,
        setColumnOrder,
        adjustedColumns,
        isColumnsReady,
        fixedColumns,
        selectedItems,
        ...props,
      }}
    >
      {children}
    </DatatableContext.Provider>
  );
};
DatatableContextProvider.displayName = "DatatableContextProvider";

const DataTableLensContextProvider: React.FC<
  DataTableLensContextProviderInterface
> = ({
  children,
  onSelect,
  selectedItems,
  classNames,
  disableResizing = false,
  viewId = "default",
  rowActions,
}) => {
  const lensContext = useLensContext();
  const viewContext = useViewContext();
  const sensors = initialiseDnDSensors();

  const { isFetched, isError, endpoints, modal_name } = lensContext;
  const { filters, searchQuery, viewChildRef, config } = viewContext;

  const visibleAttributes =
    config?.columns.map((column: any) => column.id) || [];
  console.warn("Row actions must have the following keys :", visibleAttributes);
  Object.keys(rowActions).forEach((key) => {
    if (!visibleAttributes.includes(key)) {
      console.error("Table does not contain the attribute", key);
    }
  });
  const selectionType = config?.selectionType || "none";
  let tableConfig = config;

  if (!tableConfig) {
    throw new Error(
      "No TableConfig Found, Please check the view id or backend _config call response"
    );
  }
  const { columns, identifierKey = "" } = useTableConfig(tableConfig);

  return (
    <DatatableContextProvider
      selectionType={selectionType}
      sensors={sensors}
      endpoint={endpoints.read}
      columns={columns}
      identifierKey={identifierKey}
      onSelect={onSelect ? onSelect : () => {}}
      selectedItems={selectedItems || []}
      classNames={classNames}
      disableResizing={disableResizing}
      filters={filters}
      searchQuery={searchQuery}
      viewId={viewId}
      modalName={modal_name}
      viewChildRef={viewChildRef}
      rowActions={rowActions}
    >
      {isFetched ? (
        isError ? (
          <>Error in Datatable Context</>
        ) : (
          children
        )
      ) : (
        <DatatableLoader />
      )}
    </DatatableContextProvider>
  );
};
DataTableLensContextProvider.displayName = "DataTableLensContextProvider";

const DatatableLoader = () => {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-y-2">
      <div className="relative flex items-center justify-center w-20 h-20 border-4 border-white rounded-full opacity-100 border-t-gray-600 animate-spin"></div>
      <label className="text-lg font-semibold">
        Lens Powered Dtatatable is rendering your configurations. Please be
        patient..
      </label>
    </div>
  );
};

export {
  DatatableContext,
  DatatableContextProvider,
  DataTableLensContextProvider,
};
