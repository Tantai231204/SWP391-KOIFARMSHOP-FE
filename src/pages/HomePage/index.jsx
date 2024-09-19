import { Link } from "react-router-dom";
import ModalEditUser from "../../EditUserModal";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/Register">
        <button>Go to Register</button>
      </Link>
      <ModalEditUser/>
    </div>
  );
};
export default Home;
