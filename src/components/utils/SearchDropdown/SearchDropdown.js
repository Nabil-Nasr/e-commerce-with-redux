import UnopDropdown from "unop-react-dropdown";
import "./SearchDropdown.css"

const SearchDropdown = () => {
  return (
    <>
      <div className="d-flex justify-content-between py-2">
          <div className="fs-4 fw-bold">400 نتيجة بحث</div>
          <UnopDropdown trigger={<div className="fs-4"><i className="fas fa-arrow-down-wide-short"></i> ترتيب حسب</div>} dropdownMenuClassName="drop-down-menu btn-outline-dark " align="LEFT">

              <div>الأكثر مبيعا</div>
              <div>الأعلي تقييما</div>
              <div >السعر من الأقل للأعلي</div>
              <div>السعر من الأعلي للأقل</div>

          </UnopDropdown>
        </div>
    </>
  );
}

export default SearchDropdown;
