import React from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from '../components/ui/loginForm';
// import LoginForm from '../components/ui/loginForm';
import RegisterForm from '../components/ui/registerForm';

const Login = () => {
  const { type } = useParams();

  return (
    <div className="container hero is-medium is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h3 className="title has-text-white">Login</h3>
            <hr className="login-hr" />
            <div className="box box-shadow-4">
              {type === 'signUp' ? <RegisterForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
