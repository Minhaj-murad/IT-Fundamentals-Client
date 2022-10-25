import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Courses from "./Components/Courses/Courses";
import FAQ from "./Components/FAQ/FAQ";

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
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
          loader : ()=> fetch('https://assignment-10-server-ivory.vercel.app/courses')
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
