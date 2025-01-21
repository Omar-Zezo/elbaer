import { Outlet } from "react-router-dom"
import Navbar from "../utils/Navbar"
import Footer from "../utils/Footer"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default Layout