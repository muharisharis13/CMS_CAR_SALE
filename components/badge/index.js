import React from "react";
import PropTypes from "prop-types";

const Badge = (props) => {
  switch (props?.status) {
    case "schedule":
      return <div className="badge bg-success">{props.status}</div>;
    case "waiting_schedule":
      return <div className="badge bg-primary">{props.status}</div>;
    case "PENDING":
      return <div className="badge bg-warning">{props.status}</div>;
    default:
      return props.status;
  }
};

export default Badge;

Badge.propTypes = {
  status: PropTypes.any.isRequired,
};
