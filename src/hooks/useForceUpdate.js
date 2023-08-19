import { useReducer } from "react";

const useForceUpdate = () => {
  const [,forceUpdate] = useReducer(prev => !prev, false);
  return forceUpdate;
}

export default useForceUpdate;
