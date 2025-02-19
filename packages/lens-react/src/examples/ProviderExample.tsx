import {
  Datatable,
  LensProvider,
  useLensContext,
} from "../../../lens-react/lib/main";
import { RawDisplay } from "../../../lens-react/lib/main";

const DisplayContext = () => {
  const { config } = useLensContext();
  return (
    <div className="le-text-[10px] le-border le-bg-red-800 le-text-green-400 le-p-2">
      {JSON.stringify(config, null, 2)}
    </div>
  );
};

const ProviderExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  return (
    <>
      <LensProvider lensConfiguration={configEndpoint}>
        <DisplayContext />
        <RawDisplay />
        <Datatable />
      </LensProvider>
    </>
  );
};

export default ProviderExample;
