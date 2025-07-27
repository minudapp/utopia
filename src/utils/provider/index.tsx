"use client";

import { useRef, createContext, useContext, useSyncExternalStore } from "react";

import { isNull, isUndefined } from "@/utils/guards";
import { createStore, type Store } from "./create-store";

export type ProviderName = `${string}Provider`;

export function createProvider<State>(name: ProviderName, initialState: State) {
  const StoreContext = createContext<Store<State> | null>(null);

  function Provider({
    children,
    value,
  }: {
    children: React.ReactNode;
    value?: State;
  }) {
    const storeRef = useRef<Store<State>>(null);
    if (isNull(storeRef.current)) {
      storeRef.current = createStore<State>({ ...initialState, ...value });
    }

    return <StoreContext value={storeRef.current}>{children}</StoreContext>;
  }

  Provider.displayName = name;

  function useSelector<SelectorOutput>(
    selector: (store: State) => SelectorOutput,
  ): SelectorOutput {
    const context = useContext(StoreContext);
    if (isNull(context) || isUndefined(context)) {
      throw new Error(`useSelector must be used within a ${name}.`);
    }

    return useSyncExternalStore(
      context.subscribe,
      () => selector(context.getSnapshot()),
      () => selector(initialState),
    );
  }

  function useDispatch(): Store<State>["setSnapshot"] {
    const context = useContext(StoreContext);
    if (isNull(context) || isUndefined(context)) {
      throw new Error(`useDispatch must be used within a ${name}.`);
    }

    return context.setSnapshot;
  }

  return {
    Provider,
    useSelector,
    useDispatch,
  };
}
