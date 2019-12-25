import React, { createContext, useState, useContext } from "react";

type TData = string[] | [];

export enum EInputType {
  default,
  prime,
  fibonacci
}

interface IValueContext {
  data: TData;
  setData: (arr: TData) => void;
}

const Context = createContext<IValueContext | null>(null);

export function Provider({ children }: React.PropsWithChildren<{}>) {
  const [data, setData] = useState<TData>([]);

  return <Context.Provider value={{ data, setData }}>{children}</Context.Provider>;
}

export function useStore() {
  const store = useContext(Context);
  if (!store) throw new Error("Cannot using this store");

  return store;
}
