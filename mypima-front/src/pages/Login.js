import React from "react";
import authentication from "../features/authentication";

const Login = () => {
  const { components } = authentication;
  const { LoginForm } = components;

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
