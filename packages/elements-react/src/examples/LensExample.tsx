import React, { useState } from "react";
import { Lens } from "../../lib/main";
import { makeServer } from "../mocks/mirageServer";
import { FilterBuilder } from "../../lib/components/Filters";

const LensExample = () => {
  React.useEffect(() => {
    makeServer();

    return () => {
      makeServer().shutdown();
    };
  }, []);

  const [checkedIds, setCheckedIds] = useState([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <div className="le-mx-0">
      <div className="le-h-[50vh] le-mt-10 le-overflow-auto">
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          variant="surface"
          size="3"
          showTopBar
        />
      </div>
      <div className="le-mt-10">
        <FilterBuilder
          label={"Filters surface 1"}
          variant="classic"
          size="2"
          maxDepth={4}
          showFilterJSON={false}
        />
      </div>
      {/* <FilterBuilder
        label={"Filters classic 2"}
        variant="classic"
        size="2"
        showFilterJSON={false}
      />
      <FilterBuilder
        label={"Filters soft 3"}
        variant="soft"
        size="3"
        showFilterJSON={false}
      /> */}
    </div>
  );
};

export default LensExample;
