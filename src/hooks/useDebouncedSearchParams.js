import { useSearchParams } from "react-router-dom";
import debounce from "../utils/debounce";
import { useMemo } from "react";

const useDebouncedSearchParams = (initialSearchParams = {}, delay = 250) => {
  const [searchParams, setSearchParams] = useSearchParams(initialSearchParams);

  // saving re-render from running debounce every time
  const memoizedSetSearchParams = useMemo(() => debounce(setSearchParams, delay), [delay]);

  return [searchParams, memoizedSetSearchParams];
};

export default useDebouncedSearchParams;