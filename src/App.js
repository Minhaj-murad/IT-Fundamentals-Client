import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Blog/Blog";
import Courses from "./Courses/Courses";
import FAQ from "./FAQ/FAQ";
import Home from "./Home/Home";
import Main from "./Main/Main";


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
          element: <Courses></Courses>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

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
