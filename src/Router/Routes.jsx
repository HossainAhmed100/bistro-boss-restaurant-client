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
import PageNotFound from "../pages/Home/PageNotFound/PageNotFound";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import Cart from "../pages/Dashboard/User/Cart/Cart";
import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import UserReservation from "../pages/Dashboard/User/UserReservation/UserReservation";
import UserPayHistory from "../pages/Dashboard/User/UserPayHistory/UserPayHistory";
import AddReviews from "../pages/Dashboard/User/AddReviews/AddReviews";
import UserMayBookings from "../pages/Dashboard/User/UserMayBookings/UserMayBookings";
import AddItem from "../pages/Dashboard/Admin/AddItem/AddItem";
import ManageAlltem from "../pages/Dashboard/Admin/ManageAlltem/ManageAlltem";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem/UpdateItem";
import ManageBookings from "../pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AdminRoute from "./AdminRoute";

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
          path: "adminHome",
          element: <AdminRoute><AdminHome /></AdminRoute>
        },
        {
          path: "aditems",
          element: <AdminRoute><AddItem /></AdminRoute>
        },
        {
          path: "manageAllItems",
          element: <AdminRoute><ManageAlltem /></AdminRoute>
        },
        {
          path: "updateItems/:id",
          element: <AdminRoute><UpdateItem /></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: "manageBookings",
          element: <AdminRoute><ManageBookings /></AdminRoute>
        },
        {
          path: "manageUsers",
          element: <AdminRoute><AllUsers /></AdminRoute>
        }
      ]
    }
]);
  