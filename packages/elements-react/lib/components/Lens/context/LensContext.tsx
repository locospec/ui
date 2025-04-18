import { createContext, useContext, ReactNode } from "react";
import type { LensContextType } from "../interfaces";

const LensContext = createContext<LensContextType | undefined>(undefined);

export const useLensContext = (): LensContextType => {
  const context = useContext(LensContext);
  if (!context) {
    throw new Error("useLensContext must be used within a LensProvider");
  }
  return context;
};

interface LensProviderProps extends LensContextType {
  children: ReactNode;
}

export const LensProvider = ({ children, ...props }: LensProviderProps) => {
  return <LensContext.Provider value={props}>{children}</LensContext.Provider>;
};
