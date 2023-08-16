import { useMemo, useState } from "react";
import debounce from "../utils/debounce";



const useDebouncedState = (initialState, delay = 250) => {
  const [state, setState] = useState(initialState);

  // saving re-render from running debounce every time
  const memoizedSetState = useMemo(()=>debounce(setState, delay), [delay])

  return [state, memoizedSetState];
};

export default useDebouncedState;
