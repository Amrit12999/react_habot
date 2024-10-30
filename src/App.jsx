import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Buyer from "./components/Buyer";
import Home from "./components/Home";

const router = createBrowserRouter([

  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/buyer",
    element:<p>hh</p>,
  },
  { 
    path: "/findSuppliers", 
    element:<p>Find Suppliers</p>
  },
  { path: "/supplier", 
    element:<p>h</p>
  },
  {
    path:'/about',
    element:<p>About</p>
  },
  {
    path:'/login/signUp', 
    element:<p>Login/sign up page</p>
  },
  {
    path:'/about', 
    element:<p>About</p>
  },
  {
    path:'/faq', 
    element:<p>FAQ</p>
  },
  {
    path:'/faq', 
    element:<p>FAQ</p>
  },

]);

function App() {
  return (
  
    <>
    <RouterProvider router={router}/>
      </>
  
  );
}

export default App;
