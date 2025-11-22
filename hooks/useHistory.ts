import { useState, useCallback } from 'react';

export type HistoryMode = 'PUSH' | 'REPLACE';

interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}

export function useHistory<T>(initialPresent: T) {
  const [state, setState] = useState<HistoryState<T>>({
    past: [],
    present: initialPresent,
    future: [],
  });

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  const undo = useCallback(() => {
    setState((currentState) => {
      if (currentState.past.length === 0) return currentState;

      const previous = currentState.past[currentState.past.length - 1];
      const newPast = currentState.past.slice(0, currentState.past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [currentState.present, ...currentState.future],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setState((currentState) => {
      if (currentState.future.length === 0) return currentState;

      const next = currentState.future[0];
      const newFuture = currentState.future.slice(1);

      return {
        past: [...currentState.past, currentState.present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  const set = useCallback((newPresent: T, mode: HistoryMode = 'PUSH') => {
    setState((currentState) => {
      // Prevent pushing if state hasn't effectively changed, though strict equality might not be enough for objects
      // We assume caller handles significant changes
      if (mode === 'REPLACE') {
        return { ...currentState, present: newPresent };
      }
      return {
        past: [...currentState.past, currentState.present],
        present: newPresent,
        future: [],
      };
    });
  }, []);

  return { 
    state: state.present, 
    set, 
    undo, 
    redo, 
    canUndo, 
    canRedo 
  };
}