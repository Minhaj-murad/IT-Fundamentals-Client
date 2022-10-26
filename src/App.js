import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";

import CourseElement from "./Components/Courses/CourseElement";
import Courses from "./Components/Courses/Courses";
import Rightside from "./Components/Courses/Rightside/Rightside";
import FAQ from "./Components/FAQ/FAQ";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import Signup from "./Components/Signup/Signup";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
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
          element:<PrivateRoute><CourseElement></CourseElement></PrivateRoute>,
          loader : ({params})=> fetch(`https://assignment-10-server-ivory.vercel.app/courses/${params.id}`)
        },
        {
          path: '/courses',
          element: <Rightside></Rightside>,
         
        },
        {
          path: '/faq',
          element: <PrivateRoute><FAQ></FAQ></PrivateRoute>
        },
        {
          path: '/blogs',
          element: <Blog></Blog>
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
