import React, { useMemo } from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";
import * as Component from "..";

const dataTable = (props) => {
  const {
    dataColumns,
    children,
    valueSearch,
    onChangeSearch,
    SubmitSearch,
    activeSearch,
  } = props;

  return (
    <div className="container">
      <div className="row">
        {activeSearch && (
          <div className="col-4">
            <Component.Search
              value={valueSearch}
              onChange={onChangeSearch}
              SubmitSearch={SubmitSearch}
            />
          </div>
        )}
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  {dataColumns?.map((item, idx) => (
                    <th key={idx}>{item.header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
        <div className="col-12">
          <div className="mt-3">
            <Component.Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

dataTable.propTypes = {
  dataColumns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  valueSearch: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  SubmitSearch: PropTypes.func.isRequired,
  activeSearch: PropTypes.bool,
};

export default dataTable;
