import React from "react";
import PropTypes from "prop-types";

export const TableResponsive = (props) => {
  const { children, header } = props;
  return (
    <div className="table-responsive">
      <table className="table table-lg">
        <thead>
          <tr>
            {header?.map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

TableResponsive.propTypes = {
  header: PropTypes.string.isRequired,
};
