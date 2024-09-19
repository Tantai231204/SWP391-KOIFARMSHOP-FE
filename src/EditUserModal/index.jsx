import { useState } from "react";
import { Button, Modal } from "antd";

function ModalEditUser() {
  const initFormValue = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: "",
    image: null,
    preview: null,
  };

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

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    if (formValue.password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    if (formValue.password !== formValue.confirmPassword) {
      alert("Password và Confirm Password không khớp!");
      return;
    }
    console.log("Thông tin mới", formValue);
    setOpen(false);
  };
  const handleCancel = () => {
    console.log("Đóng trang Edit");
    setOpen(false);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormValue({
      ...formValue,
      image: file,
      preview: URL.createObjectURL(file),
    });
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thay đổi thông tin cá nhân
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <form>
          <div className="edit-user-container">
            <h2>Thông tin cá nhân</h2>
            <div>
              <label className="form-label">Upload Image:</label>
              {formValue.preview && (
                <img
                  src={formValue.preview}
                  alt="Preview"
                  style={{ width: "100px", height: "100px" }}
                />
              )}
              <input
                className="form-control"
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </div>
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
            <div>
              <label className="form-label">Address:</label>
              <input
                className="form-control"
                type="text"
                name="address"
                value={formValue.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
export default ModalEditUser;
