import React from "react";
import LoginForm from "../features/authentication/components/LoginForm";

const Login = ({ onLogin }) => {
  if (localStorage.getItem("myPimaUserData") !== null) {
    window.location.href = "/dashboard";
  }

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
