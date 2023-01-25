import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '../common/form/textField';
import { validator } from '../../utils/validator';
import { useDispatch } from 'react-redux';
import { login } from '../../store/users';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const redirect = history.location.state ? history.location.state.from.pathname : '/articles';
    dispatch(login({ payload: data, redirect }));
  };

  return (
    <div className="column is-6 is-offset-3">
      <h3 className="title has-text-grey">Login</h3>
      <hr className="login-hr" />
      <div className="box box-shadow-4">
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
            <button className="button is-success" disabled={!isValid} onClick={handleSubmit}>Login</button>
          </p>
        </div>
        <div className="field">
          <Link to="/login/signUp">
            <p>Don&apos;t have an account yet?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
