"use client";

import { isUndefined } from "@/utils/guards";
import { createProvider, type ProviderName } from "./index";

type Identifier = string;

type Collection<Resource> = Record<Identifier, Resource>;

export function createCollectionProvider<Resource>(
  name: ProviderName,
  initialState: {
    collection: Collection<Resource>;
  },
) {
  const { Provider, useSelector, useDispatch } = createProvider(
    name,
    initialState,
  );

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
      if (isUndefined(resource)) {
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
