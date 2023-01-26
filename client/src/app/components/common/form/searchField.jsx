import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ searchQuery, onChange }) => {
  return (
    <div className="bd-search">
      <p className="control has-icons-left">
        <input
          className="input is-rounded ds-input"
          type="text"
          placeholder="Search the docs"
          dir="auto"
          value={searchQuery}
          onChange={onChange}
        />
        <span className="ds-dropdown-menu"></span>
        <span className="icon is-small is-left">
          <ion-icon name="search-outline"></ion-icon>
        </span>
      </p>
    </div>
  );
};

SearchField.propTypes = {
  searchQuery: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchField;
