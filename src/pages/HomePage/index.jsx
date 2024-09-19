import { Link } from "react-router-dom";
import ModalEditUser from "../../EditUserModal";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Container>
        <h1>Home Page</h1>
        <Link to="/Register">
          <button>Go to Register</button>
        </Link>
        <ModalEditUser />
      </Container>
    </div>
  );
};
export default Home;
