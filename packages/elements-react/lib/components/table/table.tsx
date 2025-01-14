import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./css/divTable.css";
import { List } from "./List.tsx";

const queryClient = new QueryClient();

const DataTable = ({
  selectionType = "single",
  selectedItems = [],
  onSelect,
  configEndpoint,
  dataEndpoint,
}: {
  resource: string;
  selectionType: "single" | "multiple" | "none";
  onSelect?: (selection: any) => void;
  selectedItems?: string[];
  configEndpoint: string;
  dataEndpoint: string;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <List
        onSelect={onSelect}
        selectionType={selectionType}
        selectedItems={selectedItems}
        configEndpoint={configEndpoint}
        dataEndpoint={dataEndpoint}
      />
    </QueryClientProvider>
  );
};

export default DataTable;
