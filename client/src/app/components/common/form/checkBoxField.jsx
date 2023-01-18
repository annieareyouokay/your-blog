import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };
  const getInputClasses = () => {
    return 'checkbox' + (error ? ' is-danger' : '');
  };
  return (
    <div className="field">
      <div className="control">
        <label className={getInputClasses()} htmlFor={name}>
          <input
            type="checkbox"
            value=""
            id={name}
            onChange={handleChange}
            checked={value}
            className="m-2"
          />
          {children}
        </label>
      </div>
      {error && <div className="help is-danger">{error}</div>}
    </div>
  );
};
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  error: PropTypes.string
};

export default CheckBoxField;
