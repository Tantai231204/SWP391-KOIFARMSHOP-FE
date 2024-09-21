import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './pages/login/Login';
import RegisterForm from './pages/register/Register';
import Admin from './pages/admin/index';
import Home from './pages/home/index';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register",
      element:<div className='register'><RegisterForm /></div>,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
