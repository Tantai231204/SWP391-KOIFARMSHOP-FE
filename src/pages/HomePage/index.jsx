
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/Register">
        <button>Go to Register</button>
      </Link>
    </div>
  );
};
export default Home;
