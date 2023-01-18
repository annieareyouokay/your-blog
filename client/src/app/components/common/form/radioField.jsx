import React from 'react';
import PropTypes from 'prop-types';

const RadioField = ({ options, name, onChange, value, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        {options.map((option) => (
          <label
            className="radio m-1"
            htmlFor={option.name + '_' + option.value}
            key={option.name + '_' + option.value}
          >
            <input
              type="radio"
              name={name}
              id={option.name + '_' + option.value}
              checked={option.value === value}
              value={option.value}
              onChange={handleChange}
              className="m-2"
            />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  );
};

RadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string
};

export default RadioField;
