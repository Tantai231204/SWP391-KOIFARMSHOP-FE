import "./index.scss";
import Header from "/src/components/headers/index";
import ModalEditUser from "./EditUserModal";
import { Container } from "react-bootstrap";
import logo from "/src/img/logo.svg";
const UserInfoPage = () => {
  const user = {
    fullName: "John Doe",
    address: "123 Main St, Anytown, USA",
    email: "john.doe@example.com",
    phoneNumber: "(555) 123-4567",
    accountBalance: 5000.0,
  };
  return (
    <div>
      <Header />
      <Container>
        <div className="userinfo__container">
          <img src={logo} alt="ảnh đại diện" />
          <div className="userinfo__item">
            <div>
              <span>Tên:</span> {user.fullName}
            </div>
            <div>
              <span>Địa chỉ:</span> {user.address}
            </div>
            <div>
              <span>Email:</span> {user.email}
            </div>
            <div>
              <span>Số điện thoại:</span> {user.phoneNumber}
            </div>
            <div>
              <span>Số dư:</span> ${user.accountBalance.toFixed(2)}
            </div>
            <div className="edit-user__modal">
              <ModalEditUser />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserInfoPage;
