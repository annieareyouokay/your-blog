import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return 'input' + (error ? ' is-danger' : '');
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field is-expanded">
          <div className="field has-addons">
            <p className="control is-expanded">
              <input
                type={showPassword ? 'text' : type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className={getInputClasses()}
                placeholder={label}
              />
            </p>
            {type === 'password' && (
              <p className="control">
                <button className="button" onClick={toggleShowPassword}>
                  <ion-icon
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  ></ion-icon>
                </button>
              </p>
            )}
          </div>
          {error && <div className="help is-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: 'text'
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextField;
