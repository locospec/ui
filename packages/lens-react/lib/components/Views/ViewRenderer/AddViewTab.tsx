import { Card } from "@/base/components/ui/card";
import { cn } from "@/components/utils/cn";

export interface AddViewTabInterface {
  activeTab: string;
}

const AddViewTab = ({ activeTab }: AddViewTabInterface) => {
  const card_classes = "w-[200px] h-[200px] flex items-center justify-center";

  return (
    <div
      key={"add"}
      className={cn(activeTab === "add" ? "" : "hidden", "w-full h-full")}
    >
      <div className="w-full h-full flex flex-col items-center justify-between">
        <h1 className="font-bold text-2xl">Add new view here</h1>
        <div className="flex gap-x-5">
          <Card className={card_classes}>Add a Data Table</Card>
          <Card className={card_classes}>Add a Raw Data </Card>
          <Card className={card_classes}>Coming Soon</Card>
        </div>
      </div>
    </div>
  );
};

export default AddViewTab;
