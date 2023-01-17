import React from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from '../components/ui/loginForm';
import RegisterForm from '../components/ui/registerForm';

const Login = () => {
  const { type } = useParams();

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          {type === 'signUp' ? <RegisterForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default Login;
