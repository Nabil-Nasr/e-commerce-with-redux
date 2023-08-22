import ReactPaginate from "react-paginate";
import "./Pagination.css";
import { useSelector } from "react-redux";

const Pagination = ({ itemReducer, applyPagination }) => {
  const { paginationResult: { currentPage, numberOfPages } } = useSelector(state => state[itemReducer]);

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
      pageCount={!numberOfPages || numberOfPages <= 1 ? 0 : numberOfPages}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      containerClassName="pagination pt-5 justify-content-center flex-wrap row-gap-1"
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
      forcePage={!currentPage || (currentPage === 1 && numberOfPages <= 1) ? -1 : currentPage - 1}
    />
  );
};

export default Pagination;

