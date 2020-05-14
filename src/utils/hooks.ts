import { useState } from 'react';

export function useToggle(initialState: boolean) {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = () => setState(!state);
  return [state, toggle] as const;
}
