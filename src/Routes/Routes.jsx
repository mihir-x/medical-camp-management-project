import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
            path: 'contact-us',
            element: <ContactUs></ContactUs>
        },
        {
            path: 'available-camps',
            element: <AvailableCamps></AvailableCamps>
        },
        {
            path: 'dashboard',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);
  