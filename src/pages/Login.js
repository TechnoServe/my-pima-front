import React from "react";
import authentication from "../features/authentication";

const Login = ({onLogin}) => {
  const { components } = authentication;
  const { LoginForm } = components;

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
