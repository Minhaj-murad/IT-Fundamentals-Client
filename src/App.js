import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
 import CheckOut from "./Components/Checkout/Checkout";

 import Courseelement from "./Components/Courses/Courseelement";


import Courses from "./Components/Courses/Courses";
import Rightside from "./Components/Courses/Rightside/Rightside";
import Error from "./Components/Error/Error";

import FAQ from "./Components/FAQ/FAQ";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Shipping from "./Components/Shipping/Shipping";

import Signup from "./Components/Signup/Signup";



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      // loader:Getcourses,
      errorElement:<Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
        ,
      
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader:()=> fetch('https://assignment-10-server-ivory.vercel.app/courses')
        },
        { 
          path:'/courses/:id',
          element:<Courseelement></Courseelement>,
          loader : ({params})=> fetch(`https://assignment-10-server-ivory.vercel.app/courses/${params.id}`)
        },
        {
          path: '/courses',
          element: <Rightside></Rightside>,
         
        },
         {
          path:'/courses/checkout/:id',
           element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
           loader : ({params})=> fetch(`https://assignment-10-server-ivory.vercel.app/courses/${params.id}`)
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
        },
        {
          path:'/shipping',
          element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        
      ]
    }
  ])




  return (
    <div >
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
