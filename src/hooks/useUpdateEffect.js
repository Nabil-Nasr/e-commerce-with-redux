import { useEffect, useRef } from "react";

// Same as useEffect but runs only when dependency change 
// Not running on component mount
const useUpdateEffect = (effectCallback, deps = []) => {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    return effectCallback();
  }, deps);
};

export default useUpdateEffect;