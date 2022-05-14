import React from "react";
import PropTypes from "prop-types";
import Pagination from "@etchteam/next-pagination";
import "@etchteam/next-pagination/dist/index.css";

const IdxPagination = (props) => {
  const { defaultCurrent, total = 200, onChange } = props;

  return (
    <React.Fragment>
      <Pagination total={total} />
    </React.Fragment>
  );
};

IdxPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  defaultCurrent: PropTypes.number.isRequired,
};

export default IdxPagination;
