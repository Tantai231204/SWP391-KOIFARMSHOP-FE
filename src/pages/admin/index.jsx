import "./admin.scss";
import { Input, Space, Button } from "antd";
import AdminHeader from "../../components/admin-headers";
import SideBar from "../../components/sidebar";
const { Search } = Input;

const onSearch = (value) => {
  console.log(value);
};

const Admin = () => {
  return (
    <div className="admin">
      <SideBar/>
      <div className="content">
        <AdminHeader/>
        <h1 className="content__title">Trang quản lý</h1>
        <div className="content__filter">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 400 }}
              name="SearchValue"
              enterButton
            />
          </Space>
          <Button type="primary">Thêm mới người dùng</Button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Số dư ví</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>
                  <Button type="primary">Chỉnh sửa</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
