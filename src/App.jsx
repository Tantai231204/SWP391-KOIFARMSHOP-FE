import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}
export default App;
