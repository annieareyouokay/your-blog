import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({ label, name, value, onChange, rows, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return 'textarea' + (error ? ' is-danger' : '');
  };

  return (
    <div className="field">
      <label className="label"> {label}</label>
      <div className="control">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          rows={rows}
        />

        {error && <div className="help is-danger">{error}</div>}
      </div>
    </div>
  );
};
TextAreaField.defaultProps = {
  type: 'text'
};
TextAreaField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextAreaField;
