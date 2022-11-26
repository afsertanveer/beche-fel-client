const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'',
            element:<Home></Home>
        },
    ]
  },
  {
    path: "*",
    element: (
      <div className="text-danger text-center mt-5">
        <h1 className="font-bolder">404</h1>
        <h2 className="font-bolder">This route is not found!</h2>
      </div>
    ),
  },
]);

export default router;