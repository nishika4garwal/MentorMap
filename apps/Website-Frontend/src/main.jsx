import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import UserLogin from './pages/User/Login.jsx';
import { RecoilRoot } from 'recoil';
import UserProfile from "./pages/User/UserProfile.jsx"
import About from './pages/RibbonPage/About.jsx';
import ContactUs from './pages/RibbonPage/ContactUs.jsx';
import Home from './pages/RibbonPage/Home.jsx';
import UserSignUp from './pages/User/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <UserLogin />
  },
  {
    path: '/user/:userId',
    element: <UserProfile />
  },{
    path:"/about",
    element:<About/>
  },{
    path:"/contact",
    element:<ContactUs/>
  },{
    path:"/home",
    element:<Home/>
  },
  {
    path:"/signup",
    element:<UserSignUp/>
  }
]);


createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
)
