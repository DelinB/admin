import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Stocks from "../pages/pharmacy/Stocks";
import Purchase from "../pages/pharmacy/Purchase";
import Prescription from "../pages/pharmacy/Prescription";
import { Suppliers } from "../pages/pharmacy/Suppliers";
import RightSideInputForm from "../component/common/rightSideInputForm";

// import SidebarComponent from "../component/Sidebarcomponent";
// import 
// import Home from "../pages/Home"; // Make sure this exists

// import About from "../pages/About"; // Make sure this exists

const routePaths = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This should be the main wrapper
    children: [
      // { index: true, element: <Prescription /> },  // This ensures "/" loads Home
      // { path: "about", element: <About /> },


      {path: "stocks", element: <Stocks /> },
      {path: "prescription", element: <Prescription /> },
      {path: "purchase", element: <Purchase />},
      {path: "suppliers", element: <Suppliers />},
      {path: "rightsideinput", element: <RightSideInputForm />},

      // common routePaths

      // {path:"sidebar",element:<SidebarComponent/>}

      
    ],
  },
 
]);

export default routePaths;
