import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <h2 className="shop-name">Koifish</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit" className="login-button">
          Đăng nhập
        </button>
      </form>
      <button className="google-login-button">Đăng nhập với Google</button>
      <div className="links">
        <Link to="/register">Đăng ký</Link>
        <Link to="/forgot-password">Quên mật khẩu</Link>
      </div>
    </div>
  );
}
export default Login;
