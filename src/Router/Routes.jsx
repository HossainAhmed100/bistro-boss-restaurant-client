import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Login from "../pages/Login/Login";
import Order from "../pages/Order/Order/Order";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUser from "../pages/Dashboard/AllUsers/AllUser";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserReservation from "../pages/Dashboard/UserReservation/UserReservation";
import UserPayHistory from "../pages/Dashboard/UserPayHistory/UserPayHistory";
import AddReviews from "../pages/Dashboard/AddReviews/AddReviews";
import UserMayBookings from "../pages/Dashboard/UserMayBookings/UserMayBookings";
import PageNotFound from "../pages/Home/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "menu",
          element: <Menu />
        },
        {
          path: "orderFood/:category",
          element: <Order />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "*",
          element: <PageNotFound />
        },
        {
          path: "secret",
          element: <PrivateRoutes>
            <Secret />
          </PrivateRoutes>
        }
      ]
    },
    {
      path: "Dashboard",
      element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
      children: [
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "userHome",
          element: <UserHome />
        },
        {
          path: "adminHome",
          element: <AdminHome />
        },
        {
          path: "userReservation",
          element: <UserReservation />
        },
        {
          path: "userpaymenthistory",
          element: <UserPayHistory />
        },
        {
          path: "giveReviews",
          element: <AddReviews />
        },
        {
          path: "userMyBookings",
          element: <UserMayBookings />
        },
        {
          path: "allUsers",
          element: <AllUser />
        }
      ]
    }
]);
  