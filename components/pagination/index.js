import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate-next";
// import "styles/pagination.module.css";

const IdxPagination = (props) => {
  const { totalPage = 100, handleOnChange, page } = props;

  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={totalPage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={(e) => handleOnChange(e)}
      containerClassName={"pagination"}
      previousLinkClassName={"pagination__link"}
      nextLinkClassName={"pagination__link"}
      disabledClassName={"pagination__link--disabled"}
      activeClassName={"pagination__link--active"}
      initialPage={page - 1}
    />
  );
};

IdxPagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleOnChange: PropTypes.number.isRequired,
};

export default IdxPagination;
