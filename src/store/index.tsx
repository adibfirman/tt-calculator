import React, { createContext, useContext } from "react";

export enum EInputType {
  default,
  prime,
  fibonacci
}

const Context = createContext(null);

export function Provider({ children }: React.PropsWithChildren<{}>) {
  return <Context.Provider value={null}>{children}</Context.Provider>;
}

export function useStore() {
  const store = useContext(Context);
  if (!store) throw new Error("Cannot using this store");

  return store;
}
