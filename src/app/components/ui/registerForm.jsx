import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckBoxField from '../common/form/checkBoxField';
import RadioField from '../common/form/radioField';
import TextField from '../common/form/textField';

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    sex: 'male',
    name: '',
    licence: false
  });
  const [errors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  return (
    <>
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <RadioField
        options={[
          { name: 'Male', value: 'male' },
          { name: 'Female', value: 'female' },
          { name: 'Other', value: 'other' }
        ]}
        value={data.sex}
        name="sex"
        onChange={handleChange}
        label="Choose your sex"
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="license">
        I agree to the <Link to="#">terms and conditions</Link>
      </CheckBoxField>
      <div className="field">
        <p className="control">
          <button className="button is-success">Login</button>
        </p>
      </div>
      <div className="field">
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
