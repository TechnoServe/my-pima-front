import "./loginform.css";
import Logo from "../../../components/Logo";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BeatLoader } from "react-spinners";
import { useAuth } from "../../../context/useAuth";
import { GoogleLogin } from "@react-oauth/google";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.trim().length < 1) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }

    if (password.trim().length < 1) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    }

    setLoading(true);
    await auth
      .login(email, password)
      .then((res) => {
        if (res.data.saveMailLogin.status === 200) {
          setLoading(false);
          navigate("/in/dashboard");
        } else {
          toast.error(res.data.saveMailLogin.message);
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error("Something Went Wrong!!!");
      });

    setLoading(false);
  };

  const handleGoogleAuth = async (response) => {
    await auth
      .googleLogin(response.credential)
      .then((res) => {
        if (res.data.saveGoogleLogin.status === 200) {
          navigate("/in/dashboard");
        } else {
          toast.error(res.data.saveGoogleLogin.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong!!!");
      });
  };

  return (
    <div>
      <div>
        <Logo className="logo" />
        <p className="form__text">Welcome to MYPIMA</p>
      </div>
      <div className="form__container">
        <div className="heroimage">
          <img
            src={process.env.PUBLIC_URL + "/heroimg.png"}
            alt="hero"
            className="hero"
          />
        </div>
        <div className="form__starts">
          <h2 className="form__login">Login</h2>
          <form>
            <label htmlFor="email" className="form__label">
              Enter your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="someone@tns.org"
              className="form__input"
              required
            />
            {errors.email.length > 1 && email.trim().length < 1 && (
              <div className="form__error">
                <p className="form__error-text">{errors.email}</p>
              </div>
            )}

            <label htmlFor="password" className="form__label">
              Enter your Password
            </label>
            <div className="password-input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form__input"
                placeholder="Must have at least 6 characters"
                required
              />
              <span
                className="password-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            {errors.password.length > 1 && password.trim().length < 1 && (
              <div className="form__error">
                <p className="form__error-text">{errors.password}</p>
              </div>
            )}
            <div className="form-footer">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="form__checkbox box"
                  checked={true}
                  disabled={true}
                />
                <label htmlFor="remember" className="form__checkbox text">
                  Remember me
                </label>
              </div>

              <Link to={"/forgot"} className="form__fp">
                Forgot Password?
              </Link>
            </div>
            <div className="form__auth">
              <button
                type="submit"
                className="form__btn"
                onClick={handleLogin}
                disabled={
                  loading ||
                  email.trim().length < 1 ||
                  password.trim().length < 1
                }
                style={{
                  cursor:
                    loading ||
                    email.trim().length < 1 ||
                    password.trim().length < 1
                      ? "not-allowed"
                      : "",
                  backgroundColor:
                    loading ||
                    email.trim().length < 1 ||
                    password.trim().length < 1
                      ? "#ccc"
                      : "#087c8f",
                }}
              >
                {loading ? (
                  <BeatLoader color="#fff" loading={true} size={10} />
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className="google__auth">
              <p
                style={{
                  fontSize: "14px",
                  color: "#b5b5b5",
                  marginBottom: "5px",
                }}
              >
                OR
              </p>
              <div className="auth__container">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <GoogleLogin
                    onSuccess={(response) => handleGoogleAuth(response)}
                    onError={() => {
                      toast.error("Something went wrong");
                    }}
                    useOneTap
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default LoginForm;
