import { useRef, createContext, useContext, useSyncExternalStore } from "react";

function createStore<State>(initialState: State) {
  let state = initialState;
  const listeners = new Set<() => void>();

  function getSnapshot() {
    return state;
  }

  function setSnapshot(callback: (state: State) => Partial<State>) {
    state = { ...state, ...callback(state) };
    listeners.forEach((listener) => listener());
  }

  function subscribe(callback: () => void) {
    listeners.add(callback);
    return () => listeners.delete(callback);
  }

  return {
    getSnapshot,
    setSnapshot,
    subscribe,
  };
}

type Store<State> = ReturnType<typeof createStore<State>>;

export function createProvider<State>(initialState: State) {
  const StoreContext = createContext<Store<State> | null>(null);

  function Provider({
    children,
    value,
  }: {
    children: React.ReactNode;
    value?: State;
  }) {
    const storeRef = useRef<Store<State>>(null);
    if (storeRef.current === null) {
      storeRef.current = createStore<State>({ ...initialState, ...value });
    }

    return <StoreContext value={storeRef.current}>{children}</StoreContext>;
  }

  function useSelector<SelectorOutput>(
    selector: (store: State) => SelectorOutput,
  ): SelectorOutput {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error("Store not found");
    }

    return useSyncExternalStore(
      context.subscribe,
      () => selector(context.getSnapshot()),
      () => selector(initialState),
    );
  }

  function useDispatch(): Store<State>["setSnapshot"] {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error("Store not found");
    }

    return context.setSnapshot;
  }

  return {
    Provider,
    useSelector,
    useDispatch,
  };
}

type Identifier = string;

type Collection<Resource> = Record<Identifier, Resource>;

function isCollectionKey<Resource>(
  collection: Collection<Resource>,
  key: Identifier,
): key is keyof Collection<Resource> {
  return Object.hasOwn(collection, key);
}

export function createCollectionProvider<Resource>(initialState: {
  collection: Collection<Resource>;
}) {
  const { Provider, useSelector, useDispatch } = createProvider(initialState);

  function useCollection() {
    return useSelector((state) => state.collection);
  }

  function useCollectionDispatch() {
    const dispatch = useDispatch();
    return (collection: Collection<Resource>) => {
      dispatch((prevState) => ({
        collection: { ...prevState.collection, ...collection },
      }));
    };
  }

  function useResource<ResourceOutput>(
    key: string,
    selector: (resource: Resource) => ResourceOutput,
  ) {
    const resource = useSelector((state) => {
      const resource = state.collection[key];
      if (!resource) {
        // This should never happen if the collection is properly managed
        // and the key exists in the collection.
        throw new Error(`Resource with key "${key}" not found in collection`);
      }

      return selector(resource);
    });

    return resource;
  }

  function useResourceDispatch(key: string) {
    const dispatch = useDispatch();
    return (update: Resource) => {
      dispatch((prevState) => ({
        collection: {
          ...prevState.collection,
          [key]: { ...prevState.collection[key], ...update },
        },
      }));
    };
  }

  function useResourceValue(key: string, name: keyof Resource) {
    return useResource(key, (resource) => resource[name]);
  }

  return {
    Provider,
    useCollection,
    useCollectionDispatch,
    useResource,
    useResourceDispatch,
    useResourceValue,
  };
}
