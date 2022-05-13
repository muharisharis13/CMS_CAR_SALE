import React, { useMemo } from "react";
import { useTable } from "react-table";
import PropTypes from "prop-types";

const dataTable = (props) => {
  const { dataColumns, data } = props;

  const columns = useMemo(() => {
    return Array.isArray(dataColumns) && dataColumns?.length > 0
      ? dataColumns?.map((item) => ({
          Header: item.header,
          accessor: item.key,
        }))
      : [
          {
            Header: "Column 1",
            accessor: "col1",
          },
          {
            Header: "Column 2",
            accessor: "col2",
          },
          {
            Header: "Column 3",
            accessor: "col3",
          },
        ];
  }, []);

  const dataTable = useMemo(() => {
    return Array.isArray(data) && data?.length
      ? data?.map((item) => item)
      : [
          {
            col1: "Hello",
            col2: "World",
            col3: "muharis",
          },
          {
            col1: "react-table",
            col2: "rocks",
            col3: "Muharis",
          },
          {
            col1: "whatever",
            col2: "you want",
            col3: "Muharis",
          },
        ];
  }, []);

  const tableInstance = useTable({ columns: columns, data: dataTable });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="table-responsive">
      <table className="table table-hover mb-0" {...getTableProps()}>
        <thead>
          {headerGroups?.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

dataTable.propTypes = {
  dataColumns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default dataTable;
