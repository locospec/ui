import React, { useState } from "react";
import type { Condition, FilterGroup } from "./interfaces/src/FilterInterface";
import { JsonHighlighter } from "../../JsonHighlighter";
import { FilterProvider } from "./context/FilterContext";
import { FilterBuilderProps } from "./interfaces/src/FilterInterface";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./FilterBuilder.css";
import EnumInput from "./inputs/EnumInput";
import { cn } from "@/components/utils/cn";
import FilterGroupComponent from "./FilterGroup";
import useFilterFunctions from "./hooks/useFilterFunctions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/base/components/ui/popover";

const queryClient = new QueryClient();

const SimpleFilter: React.FC<FilterBuilderProps> = ({
  label,
  showFilterJSON = true,
  size = "1",
  variant = "surface",
  attributes,
  queryEndpoint,
  setFiltersCallback,
  defaultFiltersValue,
  showAdvancedOption = false,
  dataEndpointHeaders,
  maxDepth = 2,
  setIsControllingAdvanced,
  externallyOpenAdvancedFilter,
}) => {
  const [advancedMode, setAdvancedMode] = React.useState(false);
  const filterContainerRef = React.useRef<HTMLDivElement>(null);
  const attributesArray: any = Object.keys(attributes).map((key) => {
    return { value: key, ...attributes[key] };
  });
  const [openAdvancedFilter, setOpenAdvancedFilter] = useState(
    externallyOpenAdvancedFilter || true
  );
  const [filter, setFilter] = useState<FilterGroup>(
    defaultFiltersValue
      ? defaultFiltersValue
      : {
          op: "and",
          conditions: attributesArray
            .filter((a: any) => a.type === "enum")
            .map((obj: any) => {
              if (obj.type === "enum") {
                return { attribute: obj.value, op: "is_any_of", value: "" };
              }
            }),
        }
  );

  const [resetState, setResetState] = useState(JSON.stringify(new Date()));

  const clearAll = () => {
    filter.conditions.forEach((_: any, index: any) => {
      updateCondition([index], "value", "");
    });
    setResetState(JSON.stringify(new Date()));
  };

  const { addCondition, addGroup, removeItem, updateCondition } =
    useFilterFunctions({ setFilter, callback: setFiltersCallback });

  React.useEffect(() => {
    externallyOpenAdvancedFilter !== undefined &&
      setOpenAdvancedFilter(externallyOpenAdvancedFilter);
  }, [externallyOpenAdvancedFilter]);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <FilterProvider
          size={size}
          variant={variant}
          attributesArray={attributesArray}
          attributesObject={attributes}
          updateCondition={updateCondition}
          filterContainerRef={filterContainerRef}
          queryEndpoint={queryEndpoint}
          filter={filter}
          dataEndpointHeaders={dataEndpointHeaders}
        >
          <div
            className="twp le-lens-wrapper le-p-4 le-w-full"
            ref={filterContainerRef}
          >
            <div
              className={cn(
                "le-w-full le-flex ",
                label ? "le-justify-between" : "le-justify-end"
              )}
            >
              {label && <label>{label}</label>}
              <div className="le-flex le-gap-x-2">
                {showAdvancedOption &&
                  (!advancedMode ? (
                    <label
                      className="hover:le-underline le-cursour-pointer"
                      onClick={() => {
                        setAdvancedMode(true);
                        setIsControllingAdvanced &&
                          setIsControllingAdvanced(true);
                      }}
                    >
                      Advanced
                    </label>
                  ) : (
                    <Popover
                      open={openAdvancedFilter}
                      onOpenChange={(open) => {
                        console.log("OPEN STATUS", open);
                        setOpenAdvancedFilter(open);
                      }}
                    >
                      <PopoverTrigger asChild>
                        <label className="hover:le-underline le-cursour-pointer">
                          Filters
                        </label>
                      </PopoverTrigger>
                      <PopoverContent
                        containerRef={filterContainerRef}
                        className="le-max-w-4xl le-w-[1000px]"
                        align="start"
                        side="left"
                      >
                        <label className="le-font-semibold">{label}</label>
                        <FilterGroupComponent
                          group={filter}
                          path={[]}
                          currentDepth={0}
                          maxDepth={maxDepth}
                          onAddCondition={addCondition}
                          onAddGroup={addGroup}
                          onRemove={removeItem}
                          onUpdate={updateCondition}
                        />
                      </PopoverContent>
                    </Popover>
                  ))}
                <label
                  className="hover:le-underline le-cursour-pointer"
                  onClick={clearAll}
                >
                  Clear All
                </label>
              </div>
            </div>
            {!advancedMode ? (
              <div className="le-flex le-gap-2 le-flex-wrap le-mt-4">
                {attributesArray.map((attribute: any, index: number) => {
                  if (attribute.type === "enum") {
                    const conIndex = filter.conditions.findIndex(
                      (f: any) => f.attribute === attribute.value
                    );

                    const con = filter.conditions[conIndex] as Condition;

                    return (
                      <EnumInput
                        key={JSON.stringify([conIndex, index])}
                        callback={(v) => {
                          updateCondition([conIndex], "value", v);
                        }}
                        defaultValues={(con?.value || []) as string[]}
                        selectedAttribute={attribute}
                        condition={con as any}
                        path={[conIndex]}
                        placeholder={`Select ${attribute.label}`}
                        resetInput={resetState}
                      />
                    );
                  }
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
          {showFilterJSON && <JsonHighlighter json={filter} />}
        </FilterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default SimpleFilter;
