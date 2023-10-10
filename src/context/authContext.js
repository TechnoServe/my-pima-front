import { createContext, useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LOGIN_MUTATION,
  VERIFY_GOOGLE_AUTH_MUTATION,
  VERIFY_SAVED_TOKEN_MUTATION,
} from "../graphql/queries/auth.queries";

// ** Defaults
const defaultProvider = {
  user: null,
  setUser: () => null,
  login: () => Promise.resolve(),
  googleLogin: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};
const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [saveMailLogin] = useMutation(LOGIN_MUTATION);
  const [verifyGoogleAuth] = useMutation(VERIFY_GOOGLE_AUTH_MUTATION);
  const [verifySavedToken] = useMutation(VERIFY_SAVED_TOKEN_MUTATION);
  const navigate = useNavigate();

  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const location = useLocation();

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem("my-pima-token");
      if (storedToken) {
        try {
          const response = await verifySavedToken({
            variables: { token: storedToken },
          });

          if (response.data.verifyToken.status === 200) {
            setUser(JSON.parse(localStorage.getItem("myPimaUserData")));
            navigate(
              location.pathname === "/login"
                ? "/in/dashboard"
                : location.pathname
            );
          } else {
            navigate("/login");
          }
        } catch (error) {
          navigate("/login");

          return error;
        }
      } else {
        navigate("/login");
      }
    };
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("my-pima-token");
    window.localStorage.removeItem("myPimaUserData");
    navigate("/login");
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await saveMailLogin({
        variables: { email, password },
      });

      if (response.data.saveMailLogin.status === 200) {
        const { token } = response.data.saveMailLogin;

        const userData = {
          id: response.data.saveMailLogin.user.user_id,
          role: response.data.saveMailLogin.user.role.role_name,
          username: response.data.saveMailLogin.user.user_name,
          email: response.data.saveMailLogin.user.user_email,
        };

        localStorage.setItem("myPimaUserData", JSON.stringify(userData));
        localStorage.setItem("my-pima-token", token);
        setUser(userData);

        navigate("/in/dashboard");
      }

      return response;
    } catch (error) {
      return error;
    }
  };

  const handleGoogleAuth = async (credential) => {
    try {
      const response = await verifyGoogleAuth({
        variables: { credential },
      });

      if (response.data.saveGoogleLogin.status === 200) {
        const userData = {
          id: response.data.saveGoogleLogin.user.user_id,
          role: response.data.saveGoogleLogin.user.role.role_name,
          username: response.data.saveGoogleLogin.user.user_name,
          email: response.data.saveGoogleLogin.user.user_email,
        };

        const { token } = response.data.saveGoogleLogin;
        localStorage.setItem("myPimaUserData", JSON.stringify(userData));
        localStorage.setItem("my-pima-token", token);
        setUser(userData);

        navigate("/in/dashboard");
      }

      return response;
    } catch (error) {
      return error;
    }
  };

  const values = {
    user,
    setUser,
    login: handleLogin,
    googleLogin: handleGoogleAuth,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
