import React from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Contact from "./Contact"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col bg-dark font-body focus:outline-none">
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Layout
