import React from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-dark font-body">
        <Navbar />
        {children}
        <footer className="py-2 text-center bg-darker text-gray-600 text-xs">
          &copy; Shane Maglangit 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
