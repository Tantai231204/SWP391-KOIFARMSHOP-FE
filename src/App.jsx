import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import RegisterForm from "./RegisterForm/Register";
import Login from "./pages/LoginPage/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
