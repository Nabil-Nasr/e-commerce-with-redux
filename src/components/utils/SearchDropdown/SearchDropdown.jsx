import UnopDropdown from "unop-react-dropdown";
import "./SearchDropdown.css";
import { useSearchParams } from "react-router-dom";

const SearchDropdown = ({ searchResults }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const sortQuery = searchParams.get("sort");
  const registerSort = sortBy => {
    return {
      "dropdown-active": sortBy === sortQuery && sortBy,
      onClick () {
        setSearchParams(prevSearchParams => {
          prevSearchParams.set("sort", sortBy);
          return prevSearchParams;
        });
      },
    };
  };

  return (
    <div className="d-flex justify-content-between py-2">
      <div className="fs-4 fw-bold">{searchResults} نتيجة بحث</div>
      <UnopDropdown
        closeOnDropdownClicked
        closeOnClickOut
        trigger={
          <div className="fs-4">
            <i className="fas fa-arrow-down-wide-short"></i> ترتيب حسب
          </div>
        }
        dropdownMenuClassName="drop-down-menu"
        align="LEFT">

        <div {...registerSort("-sold,-ratingsQuantity")}>الأكثر مبيعا</div>
        <div {...registerSort("-ratingsAverage,-ratingsQuantity")}>الأعلي تقييما</div>
        <div {...registerSort("priceAfterDiscount,price")}>السعر من الأقل للأعلي</div>
        <div {...registerSort("-priceAfterDiscount,-price")}>السعر من الأعلي للأقل</div>

      </UnopDropdown>
    </div>
  );
};

export default SearchDropdown;
