import React from "react";
import PropTypes from "prop-types";

const pageTitle = (props) => {
  const { titleName, breadcrumbItem, breadcrumbItemActive } = props;
  return (
    <div className="page-title">
      <div className="row">
        <div className="col-12 col-md-6 order-md-1 order-last">
          <h3>{titleName}</h3>
        </div>
        <div className="col-12 col-md-6 order-md-2 order-first">
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-header float-start float-lg-end"
          >
            <ol className="breadcrumb">
              {breadcrumbItem?.map((item, idx) => (
                <li className="breadcrumb-item" key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
              <li className="breadcrumb-item active" aria-current="page">
                {breadcrumbItemActive}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default pageTitle;

pageTitle.propTypes = {
  titleName: PropTypes.string.isRequired,
  breadcrumbItem: PropTypes.array.isRequired,
  breadcrumbItemActive: PropTypes.string.isRequired,
};
