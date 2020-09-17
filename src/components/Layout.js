import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-900 font-body">
        <nav class="flex flex-wrap items-center justify-between p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current text-orange-500 h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span class="font-semibold text-xl tracking-tight">ShaneMaglangit</span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-orange-500 border-orange-500">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a href="#home" class="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Home</a>
              <a href="#about" class="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">About</a>
              <a href="#projects" class="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Projects</a>
              <a href="#testimonials" class="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Testimonials</a>
            </div>
            <div>
              <button class="bg-orange-500 hover:bg-orange-700 text-sm text-white font-semibold py-2 px-4 rounded-full">Have a chat</button>
            </div>
          </div>
        </nav>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Shane Maglangit 2020
        </footer>
      </div>
    </>
  )
}

export default Layout
