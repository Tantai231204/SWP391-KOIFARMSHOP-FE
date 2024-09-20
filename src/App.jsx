import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import RegisterForm from "./pages/register/Register";
import LoginForm from "./pages/login/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Login" element={<LoginForm />} />
      </Routes>
    </>
  );
}
export default App;
