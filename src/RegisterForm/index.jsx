import PropTypes from "prop-types";
import "./style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const initFormValue = {
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  email: "",
};

function RegisterForm() {
  const [formValue, setFormValue] = useState(initFormValue);
  const handleChange = (event) => {
    const { value, name } = event.target;
    let isValid = true;

    if (name === "email") {
      const emailPattern = /^[^\s@]+@gmail.com$/;
      isValid = emailPattern.test(value);
    }
    if (isValid) {
      setFormValue({
        ...formValue,
        [name]: value,
      });
    } else {
      console.log("Giá trị không hợp lệ:", name);
    }
  };
  const navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValue.password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    if (formValue.password !== formValue.confirmPassword) {
      alert("Password và Confirm Password không khớp!");
      return;
    }
    console.log("Register Values:", formValue);
    navigate("/");
  };
  return (
    <div className="register-form-container">
      <div className="register-form">
        <form>
          <h2>Register Account</h2>
          <div>
            <label className="form-label">First Name:</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label">Last Name:</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={formValue.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label">Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label">Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="form-label">Emai:</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
