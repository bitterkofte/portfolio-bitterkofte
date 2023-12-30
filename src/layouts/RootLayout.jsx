import { Outlet } from "react-router-dom"
import Navbar from "../components/Root/Navbar"
import Footer from "../components/Root/Footer"

const RootLayout = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="min-h-screen px-5 md:px-10 pt-32 dark:bg-neutral-700 transition-colors duration-500">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
export default RootLayout