import { useRef } from "react";
import { View } from "@/main";
import { Button } from "@/base/components/ui/button";
import { Filter, Settings } from "lucide-react";
import { FilterBuilder } from "@/components/Filters";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/base/components/ui/dialog";

const FiltersTriggerButton = ({ toggleShowSheet, activeTab, config }: any) => {
  const ref = useRef(null);
  const activeConfig = config[activeTab];
  return (
    <div className="flex items-center justify-center gap-x-3" ref={ref}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <Filter />
            Filters
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[80vh]">
          <DialogHeader>
            <DialogTitle>{`${activeConfig.view_name} Filters`}</DialogTitle>
            <DialogDescription>Add filters here</DialogDescription>
          </DialogHeader>
          <View viewId={activeTab}>
            <FilterBuilder
              label={"Auction Filters"}
              maxDepth={2}
              attributes={activeConfig.filters}
              queryEndpoint={"/api/data-bench/auction-data/query"}
              showAdvancedOption
              showFilterJSON={false}
            />
          </View>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button variant={"outline"} onClick={() => toggleShowSheet(activeTab)}>
        <Settings />
        Customise
      </Button>
    </div>
  );
};

export default FiltersTriggerButton;
