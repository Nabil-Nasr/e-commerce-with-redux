import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ applyPagination, pageCount, currentPage }) => {
  const handlePageChange = ({ selected }) => {
    // The selected is starting from 0
    const page = selected + 1;
    applyPagination(page);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      pageCount={!pageCount || pageCount <= 1 ? 0 : pageCount}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      containerClassName="pagination pt-5 btn-outline-dark justify-content-center flex-wrap row-gap-1"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      disabledClassName="disabled"
      forcePage={!currentPage || (currentPage === 1 && pageCount <= 1) ? -1 : currentPage - 1}
    />
  );
};

export default Pagination;

