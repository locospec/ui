import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/base/components/ui/select";
import { FilterGroup } from "./interfaces/src/FilterInterface";
import { cn } from "@/base/lib/utils";
import { GROUP_OPERATORS } from "./constants/ConditionOperators";

export interface OPDisplayProps {
  index: number;
  group: FilterGroup;
  handleGroupOperatorChange: (value: string) => void;
}

const OPDisplay = ({
  index,
  group,
  handleGroupOperatorChange,
}: OPDisplayProps) => {
  if (index === 0) {
    return (
      <label className={cn("le-p-1 le-w-[70px] le-text-center")}>WHERE</label>
    );
  }
  if (index === 1) {
    return (
      <Select onValueChange={handleGroupOperatorChange}>
        <SelectTrigger className="le-p-1 le-w-[70px] le-text-center">
          <SelectValue placeholder={group.op.toUpperCase()} />
        </SelectTrigger>
        <SelectContent>
          {GROUP_OPERATORS.map((op) => (
            <SelectItem key={op.value} value={op.value}>
              {op.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <label className={cn("le-p-1 le-w-[70px] le-text-center")}>
      {group.op.toUpperCase()}
    </label>
  );
};

export { OPDisplay };
