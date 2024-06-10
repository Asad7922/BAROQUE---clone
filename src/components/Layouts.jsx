import { Outlet } from "react-router-dom"
import Footer from "../Navigation/Footer"
import Navbarr from "../Navigation/Navbarr"



function Layouts() {
  return (
    <div>
      <Navbarr/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layouts
