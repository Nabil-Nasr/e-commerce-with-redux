import { useMemo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import debounce from "../utils/debounce";

const useSearchNavigate = ({ delay } = {}) => {
  const navigate = useNavigate();

  const searchNavigate = ({ pathname, searchParams }) => (
    navigate({
      pathname,
      search: `?${createSearchParams(searchParams)}`
    }));

  if (delay != null) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const memoizedSearchNavigate = useMemo(() => debounce(searchNavigate, delay), [delay]);
    return memoizedSearchNavigate;
  }

  return searchNavigate;
};

export default useSearchNavigate;