import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/Forgot';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './services/firebaseConfig';

const CurrentUser = () => {
  const [user, loading, error] = useAuthState(auth);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


