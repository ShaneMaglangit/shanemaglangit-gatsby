import { button } from "gatsby"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavbarItems = () => {
    return (
        <>
            {/* Menu items for the navigation */}
            <div className="text-sm md:flex-grow md:text-right">
                <button onClick={() => scrollTo('#header')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-500">Home</button>
                <button onClick={() => scrollTo('#about')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-500">About</button>
                <button onClick={() => scrollTo('#project')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-500">Projects</button>
                <button onClick={() => scrollTo('#testimonial')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-500">Testimonials</button>
                <button className="font-medium text-gray-500 mt-4 md:bg-orange-500 md:hover:bg-orange-700 md:text-sm md:text-white md:font-semibold md:mt-0 md:py-2 md:px-4 md:rounded-full">Have a chat</button>
            </div>
        </>
    )
}

export default NavbarItems