import React from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-dark font-body focus:outline-none">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
