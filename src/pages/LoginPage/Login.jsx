import { Link } from "react-router-dom";
import "./login.scss";
import { Button } from "antd";

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
      <div className="links">
        <Button>
          <Link to="/register">Đăng ký</Link>
        </Button>
        <Button>
          <Link to="/forgot-password">Quên mật khẩu</Link>
        </Button>
      </div>
    </div>
  );
}
export default Login;
