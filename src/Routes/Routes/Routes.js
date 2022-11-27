import DashboardLayout from "../../Layouts/DashboardLayOut";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Registration from "../../Pages/LoginAndRegister/Registration/Registration";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;