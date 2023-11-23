import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";


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
  