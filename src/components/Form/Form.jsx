import { useState } from "react";
import iconArrow from "../../assets/images/icon-arrow.svg";
import errorIcon from "../../assets/images/icon-error.svg";
import "../../assets/styles/form.scss";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("The email field cannot be empty.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email.");
      return;
    }

    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`form-group ${error ? "error" : ""}`}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          {error && (
            <>
            <p className="error-message">{error}</p>
            <img src={errorIcon} alt="Icon error" aria-hidden="true" className="icon-error" />  
            </>
          )}
        </div>
        
        <button type="submit" className="btn-submit">
          <img src={iconArrow} alt="" className="icon-arrow" />
        </button>
      </div>
    </form>
  );
}
