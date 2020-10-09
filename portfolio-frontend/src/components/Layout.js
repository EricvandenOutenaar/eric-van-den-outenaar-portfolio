import React,{useState, useEffect} from "react"
// import "../css/main.css"
import { Navbar } from "./Navbar"
import { Test } from "./Test"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

 
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
   
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
      <Test />
    </>
  )
}

export default Layout
