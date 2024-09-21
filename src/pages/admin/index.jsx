import { Button } from "antd";
import "./admin.scss";
import { Container } from "react-bootstrap";


function Admin() {
  return (
    <Container>
    <div className="admin-container">
      <div className="admin-title"> Quản lý </div>
      <div className="button-manage">
        <div>
          <Button
            icon={
              <img
                src="/src/img/logo.svg"
                alt="logo"
                style={{ width: 61, height: 59 }}
              />
            }
          >
            Hồ sơ khách hàng
          </Button>
          <Button
            icon={
              <img
                src="/src/img/logo.svg"
                alt="logo"
                style={{ width: 61, height: 59 }}
              />
            }
          >
            Hồ sơ khách hàng
          </Button>
        </div>
        <div>
          <Button
            icon={
              <img
                src="/src/img/logo.svg"
                alt="logo"
                style={{ width: 61, height: 59 }}
              />
            }
          >
            Hồ sơ khách hàng
          </Button>
          <Button
            icon={
              <img
                src="/src/img/logo.svg"
                alt="logo"
                style={{ width: 61, height: 59 }}
              />
            }
          >
            Hồ sơ khách hàng
          </Button>
        </div>
      </div>
      <div className="button-last">
        <Button
          icon={
            <img src="/src/img/logo.svg" alt="logo" style={{ width: 61, height: 59 }} />
          }
        >
          Hồ sơ khách hàng
        </Button>
      </div>
    </div>
    </Container>
  );
}

export default Admin;
