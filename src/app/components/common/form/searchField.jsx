import React from 'react';

const SearchField = () => {
  return (
    <div className="bd-search">
      <p className="control has-icons-left">
        <input
          className="input is-rounded ds-input"
          type="text"
          placeholder="Search the docs"
          aria-label="search input"
          dir="auto"
        />
        <span className="ds-dropdown-menu"></span>
        <span className="icon is-small is-left">
          <ion-icon name="search-outline"></ion-icon>
        </span>
      </p>
    </div>
  );
};

export default SearchField;
