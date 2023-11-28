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
import UpdateCamp from "../Pages/Dashboard/UpdateCamp/UpdateCamp";
import ManageRegisteredCamps from "../Pages/Dashboard/Organizers/ManageRegisteredCamps/ManageRegisteredCamps";
import ParticipantRegisteredCamp from "../Pages/Dashboard/Participant/ParticipantRegisteredCamp/ParticipantRegisteredCamp";
import PaymentHistory from "../Pages/Dashboard/Participant/PaymentHistory/PaymentHistory";
import FeedbackRating from "../Pages/Dashboard/Participant/FeedbackRating/FeedbackRating";
import AddUpcomingCamp from "../Pages/Dashboard/Organizers/AddUpcomingCamp/AddUpcomingCamp";
import UpcomingCampDetails from "../Pages/UpcomingCampDetails/UpcomingCampDetails";
import ManageUpcoming from "../Pages/Dashboard/Organizers/ManageUpcoming/ManageUpcoming";
import UpdateUpcoming from "../Pages/Dashboard/Organizers/UpdateUpcoming/UpdateUpcoming";


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
            element: <PrivateRoutes><AvailableCamps></AvailableCamps></PrivateRoutes>
        },
        {
          path: 'camp-details/:id',
          element: <CampDetails></CampDetails>
        },
        {
          path: 'upcoming-camp-details/:id',
          element: <UpcomingCampDetails></UpcomingCampDetails>
        },
        {
            path: 'dashboard',
            element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
            children:[
              {
                index: true,
                element: <PrivateRoutes><DashboardHome></DashboardHome></PrivateRoutes>
              },
              {
                path: 'organizer-profile',
                element: <PrivateRoutes><OrganizerProfile></OrganizerProfile></PrivateRoutes>
              },
              {
                path: 'participant-profile',
                element: <PrivateRoutes><ParticipantProfile></ParticipantProfile></PrivateRoutes>
              },
              {
                path: 'professional-profile',
                element: <PrivateRoutes><ProfessionalProfile></ProfessionalProfile></PrivateRoutes>
              },
              {
                path: 'add-a-camp',
                element: <PrivateRoutes><AddCamp></AddCamp></PrivateRoutes>
              },
              {
                path: 'manage-camps',
                element: <PrivateRoutes><ManageCamps></ManageCamps></PrivateRoutes>
              },
              {
                path: 'update-camp/:id',
                element: <PrivateRoutes><UpdateCamp></UpdateCamp></PrivateRoutes>
              },
              {
                path: 'manage-registered-camps',
                element: <PrivateRoutes><ManageRegisteredCamps></ManageRegisteredCamps></PrivateRoutes>
              },
              {
                path: 'add-upcoming-camp',
                element: <PrivateRoutes><AddUpcomingCamp></AddUpcomingCamp></PrivateRoutes>
              },
              {
                path: 'manage-upcoming-camp',
                element: <PrivateRoutes><ManageUpcoming></ManageUpcoming></PrivateRoutes>
              },
              {
                path: 'update/upcoming-camp/:id',
                element: <PrivateRoutes><UpdateUpcoming></UpdateUpcoming></PrivateRoutes>,
              },
              {
                path: 'registered-camps',
                element: <PrivateRoutes><ParticipantRegisteredCamp></ParticipantRegisteredCamp></PrivateRoutes>
              },
              {
                path: 'payment-history',
                element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
              },
              {
                path: 'feedback-and-ratings',
                element: <PrivateRoutes><FeedbackRating></FeedbackRating></PrivateRoutes>
              }
            ]
        }
      ]
    },
  ]);
  