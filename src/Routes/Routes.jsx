import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import AddCamp from "../Pages/Dashboard/AddCamp/AddCamp";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import OrganizerProfile from "../Pages/Dashboard/Profile/OrganizerProfile";
import ParticipantProfile from "../Pages/Dashboard/Profile/ParticipantProfile";
import ProfessionalProfile from "../Pages/Dashboard/Profile/ProfessionalProfile";
import CampDetails from "../Pages/CampDetails/CampDetails";
import ManageCamps from "../Pages/Dashboard/Organizers/ManageCamps/ManageCamps";


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
          path: 'camp-details/:id',
          element: <CampDetails></CampDetails>
        },
        {
            path: 'dashboard',
            element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
            children:[
              {
                index: true,
                element: <DashboardHome></DashboardHome>
              },
              {
                path: 'organizer-profile',
                element: <OrganizerProfile></OrganizerProfile>
              },
              {
                path: 'participant-profile',
                element: <ParticipantProfile></ParticipantProfile>
              },
              {
                path: 'professional-profile',
                element: <ProfessionalProfile></ProfessionalProfile>
              },
              {
                path: 'add-a-camp',
                element: <AddCamp></AddCamp>
              },
              {
                path: 'manage-camps',
                element: <PrivateRoutes><ManageCamps></ManageCamps></PrivateRoutes>
              }
            ]
        }
      ]
    },
  ]);
  