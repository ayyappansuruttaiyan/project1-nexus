import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoginActive, setLoginActive] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const switchForm = () => {
    setLoginActive((prev) => !prev);
    setErrors({ name: "", email: "", password: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (isLoginActive && !formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className={`container ${isLoginActive ? "active" : ""}`}>
      <div
        className={`form-container sign-in ${isLoginActive ? "" : "hidden"}`}
      >
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="/" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="/" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="/" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{errors.email}</span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error">{errors.password}</span>
          <a href="/">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div
        className={`form-container sign-up ${isLoginActive ? "hidden" : ""}`}
      >
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="/" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="/" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="/" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <span className="error">{errors.name}</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{errors.email}</span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error">{errors.password}</span>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className={`toggle ${isLoginActive ? "" : "active"}`}>
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Please provide your information to access all site features.</p>
            <button className="hidden" onClick={switchForm}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Unlock the full potential of our site by creating an account with
              your personal details.
            </p>
            <button className="hidden" onClick={switchForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
