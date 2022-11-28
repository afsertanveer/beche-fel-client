import DashboardLayout from "../../Layouts/DashboardLayOut";
import AllProducts from "../../Pages/AllProducts.js/AllProducts";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import MyOrders from "../../Pages/Dashboard/BuyerDashBoard/MyOrders/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../../Pages/Dashboard/SellerDashBoard/MyProducts/MyProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Registration from "../../Pages/LoginAndRegister/Registration/Registration";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddProduct from './../../Pages/Dashboard/SellerDashBoard/AddProduct/AddProduct';
import BuyerRoute from './../BuyerRoute/BuyerRoute';

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
      {
        path: "categories/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.name}`),
        element: <CategoryProducts></CategoryProducts>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: <BuyerRoute>
          <MyOrders></MyOrders>
        </BuyerRoute>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;