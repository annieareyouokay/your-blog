import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckBoxField from '../common/form/checkBoxField';
import RadioField from '../common/form/radioField';
import TextField from '../common/form/textField';
import { validator } from '../../utils/validator';

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    sex: 'male',
    name: '',
    licence: false
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  // const isValid = Object.keys(errors).length === 0;

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newData = {
      ...data
    };
    console.log(newData);
    // dispatch(signUp(newData));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения'
      },
      min: {
        message: 'Имя должно состоять минимум из 3 символов',
        value: 3
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8
      }
    },
    licence: {
      isRequired: {
        message:
          'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
      }
    }
  };

  return (
    <div className="column is-6 is-offset-3">
      <h3 className="title has-text-grey">Register</h3>
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
        <CheckBoxField
          value={data.stayOn}
          onChange={handleChange}
          name="license"
        >
          I agree to the <Link to="#">terms and conditions</Link>
        </CheckBoxField>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={handleSubmit}>
              Submit
            </button>
          </p>
        </div>
        <div className="field">
          <Link to="/login">
            <p>Already have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
