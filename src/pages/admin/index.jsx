import { Button } from "antd";
import "./admin.scss";
import logo from "/src/img/logo.svg";
import  Header  from "/src/components/headers/index";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Admin() {
  return (
    <>
      <Header />
      <Container>
      <div className="admin-container">
        <div className="admin-title"> Quản lý </div>
        <div className="button-manage">
          <div>
            <Button
              icon={<img src={logo} alt="logo" style={{ width: "24px" }} />}
            >
              <NavLink to="/">Hồ sơ khách hàng</NavLink>
            </Button> 
            <Button
              icon={<img src={logo} alt="logo" style={{ width: "24px" }} />}
            >
              <NavLink> Quản lý ký gửi</NavLink>
            </Button>
          </div>
          <div>
            <Button
              icon={<img src={logo} alt="logo" style={{ width: "24px" }} />}
            >
              <NavLink>Quản lý giống cá</NavLink>
            </Button>
            <Button
              icon={<img src={logo} alt="logo" style={{ width: "24px" }} />}
            >
            <NavLink>Quản lý đơn hàng</NavLink>
            </Button>
          </div>
        </div>
        <div className="button-last">
          <Button
            icon={<img src={logo} alt="logo" style={{ width: "24px" }} />}
          >
            <NavLink>Thống kê và báo cáo</NavLink>
          </Button>
        </div>
      </div>
      </Container>
    </>
  );
}

export default Admin;
