import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../common/form/textField';

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
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
      <div className="field">
        <p className="control">
          <button className="button is-success">Login</button>
        </p>
      </div>
      <div className="field">
        <Link to="/login/signUp">
          <p>Don&apos;t have an account yet?</p>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
