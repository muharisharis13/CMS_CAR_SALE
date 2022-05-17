import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const IdxPagination = (props) => {
  const { totalPage = 5, handleOnChange, page } = props;

  return (
    <ReactPaginate
      previousLabel={<i className="bi bi-left" style={{ width: "20px" }} />}
      nextLabel={<i className="bi bi-right" style={{ width: "20px" }} />}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={totalPage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handleOnChange}
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
