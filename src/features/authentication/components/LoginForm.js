import "./loginform.css";
import Logo from "../../../components/Logo";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { ReactComponent as HeroImgH } from "../assets/heroimg.svg";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const history = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <div className>
        <Logo className="logo" />
        <p className="form__text">Welcome to MYPIMA</p>
      </div>
      <div className="form__container">
        <div className="heroimage">
          <HeroImgH />
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
              placeholder="moyoweke@gmail.com"
              className="form__input"
            />

            <label htmlFor="password" className="form__label">
              Enter your Password
            </label>
            <div className="password-input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="form__input"
                placeholder="Must have at least 6 characters"
              />
              <span
                className="password-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className="form-footer">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="form__checkbox box"
                />
                <label htmlFor="remember" className="form__checkbox text">
                  Remember me
                </label>
              </div>

              <a href="http://" className="form__fp">
                Forgot Password?
              </a>
            </div>
            <div className="form__auth">
              <button type="submit" className="form__btn" >
                Login
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
              <a href="#">
                <div style={{ display: "inline-flex" }}>
                  <FcGoogle size={24} />
                  <p>Sign in with Google</p>
                </div>
              </a>
            </div>
          </div>
          </form>
      
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
