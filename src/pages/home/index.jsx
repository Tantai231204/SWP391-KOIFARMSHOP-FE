
import ModalEditUser from "../../EditUserModal";
import { Container } from "react-bootstrap";
import Header from "../../components/headers";
const Home = () => {
  return (
    <div>
      <Container>
        <h1>Home Page</h1>
        <Header />
        <ModalEditUser />
      </Container>
    </div>
  );
};
export default Home;
