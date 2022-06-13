import React from "react";
import PropTypes from "prop-types";

const Badge = (props) => {
  switch (props?.status) {
    case "SCHEDULE":
      return <div className="badge bg-secondary">{props.status}</div>;
    case "INSPEKSI":
      return <div className="badge bg-warning">{props.status}</div>;
    case "PENDING":
      return <div className="badge bg-dark">{props.status}</div>;
    case "APPROVE":
      return <div className="badge bg-success">{props.status}</div>;
    case "SOLD":
      return <div className="badge bg-info">{props.status}</div>;
    case "CANCEL":
      return <div className="badge bg-danger">{props.status}</div>;
    default:
      return props.status;
  }
};

export default Badge;

Badge.propTypes = {
  status: PropTypes.any.isRequired,
};
