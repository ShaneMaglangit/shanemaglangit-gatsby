import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-900 font-body">
        <header className="p-4 text-orange-500 font-semibold">
          <h1 className="max-w-4xl mx-auto">ShaneMaglangit</h1>
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Shane Maglangit 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
