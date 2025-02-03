"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { List } from "./List.tsx";
import { LensProvider } from "./context/LensContext.tsx";
import type { LensInterface, SizesType, LensVariantTypes } from "./interfaces";
import "./Lens.css";
import ThemeProvider from "../ThemeProvider/ThemeProvider.tsx";
import { cn } from "../utils/cn.ts";

const queryClient = new QueryClient();

const Lens = ({
  selectedItems = [],
  onSelect,
  showDevTools = false,
  showTableMetrics = false,
  configEndpoint,
  configCallback,
  dataEndpoint,
  dataCallback,
  size: initialSize = "1",
  variant: initialVariant = "surface",
  showTopBar = false,
  showThemeSwitcher = false,
}: LensInterface) => {
  const [size, setSize] = useState<SizesType>(initialSize);
  const [variant, setVariant] = useState<LensVariantTypes>(initialVariant);

  return (
    <ThemeProvider showThemeSwitcher={showThemeSwitcher}>
      <div
        className={cn(
          "le-w-full le-h-full twp lens-root le-lens-wrapper lens-root le-lens-wrapper le-flex le-flex-col le-overflow-hidden",
          variant === "surface"
            ? "le-border le-rounded-lg le-border-[var(--gray-7)]"
            : ""
        )}
      >
        <QueryClientProvider client={queryClient}>
          {showDevTools && <ReactQueryDevtools />}
          <LensProvider
            showDevTools={showDevTools}
            showTableMetrics={showTableMetrics}
            dataCallback={dataCallback}
            configCallback={configCallback}
            size={size}
            variant={variant}
            variantClass={`le-table-variant-${variant}`}
            showTopBar={showTopBar}
            setSize={setSize}
            setVariant={setVariant}
          >
            <List
              onSelect={onSelect}
              selectedItems={selectedItems}
              configEndpoint={configEndpoint || ""}
              dataEndpoint={dataEndpoint}
            />
          </LensProvider>
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
};

export default Lens;
