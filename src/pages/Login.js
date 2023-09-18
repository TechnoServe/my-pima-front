import React from "react";
import LoginForm from "../features/authentication/components/LoginForm";

const Login = ({ onLogin }) => {
  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
