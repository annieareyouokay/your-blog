import React from 'react';
import LoginForm from '../components/ui/loginForm';

const Login = () => {
  return (
    <div className="container hero is-medium is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h3 className="title has-text-white">Login</h3>
            <hr className="login-hr" />
            <div className="box box-shadow-4">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
