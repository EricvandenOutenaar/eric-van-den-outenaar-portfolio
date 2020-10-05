import React from "react"
// import "../css/main.css"
import { Navbar } from "./Navbar"
import { Test } from "./Test"
// import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <Footer />
      <Test />
    </>
  )
}

export default Layout
