import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../features/authentication/components/loginform.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleForgot = async (e) => {
    e.preventDefault();

    if (email.trim().length < 1) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }

    setLoading(true);

    setLoading(false);
  };

  return (
    <div>
      <div className="form__container">
        <div className="form__starts">
          <h2 className="form__login">Forgot Password</h2>
          <form>
            <label htmlFor="email" className="form__label">
              Provide your Email
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
            <div className="form-footer">
              <Link to={"/login"} className="form__fp">
                Back to Login
              </Link>
            </div>
            <div className="form__auth">
              <button
                type="submit"
                className="form__btn"
                onClick={handleForgot}
                disabled={loading || email.trim().length < 1}
                style={{
                  cursor:
                    loading || email.trim().length < 1 ? "not-allowed" : "",
                  backgroundColor:
                    loading || email.trim().length < 1 ? "#ccc" : "#087c8f",
                }}
              >
                {loading ? (
                  <BeatLoader color="#fff" loading={true} size={10} />
                ) : (
                  "Send Mail"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default ForgotPassword;
