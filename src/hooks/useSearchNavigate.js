import { createSearchParams, useNavigate } from "react-router-dom";

const useSearchNavigate = () => {
  const navigate = useNavigate();

  const searchNavigate = ({ pathname, searchParams }) => (
    navigate({
      pathname,
      search: `?${createSearchParams(searchParams)}`
    }));

  return searchNavigate;
};

export default useSearchNavigate;