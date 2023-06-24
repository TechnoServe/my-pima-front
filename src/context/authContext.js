import { createContext, useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem("my-pima-token");
      if (storedToken) {
        try {
          const response = await verifySavedToken({
            variables: { token: storedToken },
          });

          if (response.data.verifySavedToken.status === 200) {
            const user = response.data.verifySavedToken.user;

            const userData = {
              id: user.user_id,
              role: "admin",
              org_id: user.org_id,
              fullName: `${user.first_name} ${user.last_name}`,
              username: `${user.first_name} ${user.last_name}`,
              email: user.email_address,
            };
            localStorage.setItem("myPimaUserData", JSON.stringify(userData));
            setUser(userData);

            navigate("/account");
          } else {
            navigate("/login");
          }
        } catch (error) {
          navigate("/login");

          return error;
        }
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
      console.log(response);

      if (response.data.saveMailLogin.status === 200) {
        const { token } = response.data.saveMailLogin;

        const userData = {
          id: 1,
          role: "admin",
          fullName: email.split("@")[0],
          username: email.split("@")[0],
          email,
        };

        localStorage.setItem("myPimaUserData", JSON.stringify(userData));
        localStorage.setItem("my-pima-token", token);
        setUser(userData);

        navigate("/account");
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

      if (response.data.verifyGoogleAuth.status === 200) {
        const userData = {
          id: 1,
          role: "admin",
        };

        const { token } = response.data.verifyGoogleAuth;
        localStorage.setItem("myPimaUserData", JSON.stringify(userData));
        localStorage.setItem("refreshToken", token);
        localStorage.setItem("accessToken", token);
        setUser(userData);

        navigate("/account");
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
