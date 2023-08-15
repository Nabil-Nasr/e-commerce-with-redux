import { useState } from "react";
import debounce from "../utils/debounce";



const useDebouncedState = (initialState, delay = 250) => {
  const [state, setState] = useState(initialState);

  return [state, debounce(setState, delay)];
};

export default useDebouncedState;
