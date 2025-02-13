import { useCallback } from "react";
import { useFilterContext } from "../context/FilterContext";
import { AttributeDefinitionType } from "../interfaces";
import type { Condition } from "../interfaces/src/FilterInterface";
import TextInput from "./TextInput";
import { DatePicker } from "@/base/components/ui/datepicker";
import EnumInput from "./EnumInput";
import NumberInput from "./NumberInput";
import NumberRangeInput from "./NumberRangeInput";
import "./input.css";

export interface ValueRendererInterface {
  condition: Condition;
  selectedAttribute: AttributeDefinitionType | null;
  path: number[];
}

const ValueInputRenderer = ({
  condition,
  selectedAttribute,
  path,
}: ValueRendererInterface) => {
  if (
    !condition?.op ||
    ["isNull", "isNotNull"].includes(condition?.op) ||
    !selectedAttribute ||
    selectedAttribute.type === "boolean"
  ) {
    return <></>;
  }

  const { updateCondition, filterContainerRef } = useFilterContext();

  const handleValueChange = useCallback(
    (value: string | number | string[] | number[] | boolean) =>
      updateCondition(path, "value", value),
    [updateCondition, path]
  );

  if (selectedAttribute.type === "string") {
    return (
      <TextInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={(v: any) => {
          handleValueChange(v);
        }}
      />
    );
  }

  if (selectedAttribute.type === "number") {
    if (condition.op === "between" || condition.op === "not_between") {
      return (
        <NumberRangeInput
          condition={condition}
          selectedAttribute={selectedAttribute}
          handleValueChange={handleValueChange}
        />
      );
    }
    return (
      <NumberInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={(v: any) => {
          handleValueChange(v);
        }}
      />
    );
  }

  if (selectedAttribute.type === "date") {
    return (
      <DatePicker
        containerRef={filterContainerRef}
        callback={handleValueChange}
      />
    );
  }

  if (selectedAttribute.type === "enum") {
    const asMulti =
      condition?.op === "is_any_of" || condition?.op === "is_none_of";
    return (
      <EnumInput
        defaultValues={(condition.value as string[]) || []}
        key={condition.attribute + "_" + JSON.stringify(path)}
        callback={handleValueChange}
        selectedAttribute={selectedAttribute}
        condition={condition}
        path={path}
        placeholder={`Select ${selectedAttribute.label}`}
        multiple={asMulti}
      />
    );
  }

  return <>{JSON.stringify(selectedAttribute.type)}</>;
};

export default ValueInputRenderer;
