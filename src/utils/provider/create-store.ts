export function createStore<State>(initialState: State) {
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

export type Store<State> = ReturnType<typeof createStore<State>>;
