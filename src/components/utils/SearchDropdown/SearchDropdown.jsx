import { Button, Dropdown } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "./SearchDropdown.css";

const SearchDropdown = ({ searchResults }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const sortQuery = searchParams.get("sort");
  const registerSort = sortBy => {
    return {
      active: sortBy === sortQuery,
      variant: "outline-dark",
      className: "py-2",
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
      <Dropdown>

        <Dropdown.Toggle id="dropdown-toggle-button" variant="light" className="fs-4 px-0">
          <i className="fas fa-arrow-down-wide-short"></i> ترتيب حسب
        </Dropdown.Toggle>

        <Dropdown.Menu className="p-3">

          <Button {...registerSort("-sold,-ratingsQuantity")}>الأكثر مبيعا</Button>

          <Button {...registerSort("-ratingsAverage,-ratingsQuantity")}>الأعلي تقييما</Button>

          <Button {...registerSort("priceAfterDiscount,price")}>السعر من الأقل للأعلي</Button>

          <Button {...registerSort("-priceAfterDiscount,-price")}>السعر من الأعلي للأقل</Button>

        </Dropdown.Menu>

      </Dropdown>
    </div>
  );
};

export default SearchDropdown;
