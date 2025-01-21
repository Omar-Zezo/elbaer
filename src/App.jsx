import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    Component: Layout,
    path: "/",
    children : [
      {
        index: true,
        element: <Home/>
      },
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
