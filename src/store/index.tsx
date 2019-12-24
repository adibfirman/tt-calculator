import React, { createContext, useState, useContext } from "react";

export enum EInputType {
  default,
  prime,
  fibonacci
}

export type TData = Array<String>;

interface IValueContext {
  data: TData;
  setData: Function;
}

const Context = createContext<IValueContext | null>(null);

export function Provider({ children }: React.PropsWithChildren<{}>) {
  const [data, setData] = useState([]);

  return <Context.Provider value={{ data, setData }}>{children}</Context.Provider>;
}

export function useStore() {
  const store = useContext(Context);
  if (!store) throw new Error("Cannot using this store");

  return store;
}
