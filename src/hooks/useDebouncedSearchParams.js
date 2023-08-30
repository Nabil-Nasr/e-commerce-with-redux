import { useSearchParams } from "react-router-dom";
import debounce from "../utils/debounce";
import { useMemo } from "react";

const useDebouncedSearchParams = (initialSearchParams = {}, delay = 250) => {
  const [searchParams, setSearchParams] = useSearchParams(initialSearchParams);

  // saving re-render from running debounce every time
  // setting setSearchParams as dependency is necessary to not preserve the pathname of component mounting
  // because setSearchParams is changing on every change on the location 
  const memoizedSetSearchParams = useMemo(() => debounce(setSearchParams, delay), [setSearchParams, delay]);

  return [searchParams, memoizedSetSearchParams];
};

export default useDebouncedSearchParams;