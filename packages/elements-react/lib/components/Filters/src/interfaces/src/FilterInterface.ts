type FilterSizes = "1" | "2" | "3";
type FilterVariants = "surface" | "soft" | "classic";

interface FilterContextType {
  size: FilterSizes;
  variant: FilterVariants;
}

interface FilterBuilderProps {
  maxDepth?: number;
  showFilterJSON?: boolean;
  size?: FilterSizes;
  variant?: FilterVariants;
  label?: string;
}

export type {
  FilterContextType,
  FilterBuilderProps,
  FilterSizes,
  FilterVariants,
};
