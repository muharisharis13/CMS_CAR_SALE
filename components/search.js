import React from "react";
import styles from "../styles/components/search.module.css";
import PropTypes from "prop-types";

const Search = (props) => {
  const { placeholder, value, onChange, SubmitSearch } = props;

  const BtnSubmit = (e) => {
    e.preventDefault();
    SubmitSearch();
  };

  return (
    <form onSubmit={BtnSubmit} className={`${styles.inputGroup} input-group`}>
      <div className="button-wrap d-flex align-items-center justify-content-center">
        <button
          className={`${styles.btn} btn`}
          type="submit"
          onClick={BtnSubmit}
        >
          <svg class="bi" width="1em" height="1em" fill="currentColor">
            <use xlinkHref="/assets/vendors/bootstrap-icons/bootstrap-icons.svg#search" />
          </svg>
        </button>
      </div>
      <div className={`${styles.input}`}>
        <input
          type="text"
          className={`${styles.inputSearch} form-control`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  SubmitSearch: PropTypes.func.isRequired,
};

Search.defaultProps = {
  placeholder: "Search...",
};
