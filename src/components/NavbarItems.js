import { button } from "gatsby"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavbarItems = ({ showContact }) => {
    return (
        <>
            {/* Menu items for the navigation */}
            <div className="text-sm md:flex-grow md:text-right">
                <button onClick={() => scrollTo('#header')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-300 focus:outline-none">Home</button>
                <button onClick={() => scrollTo('#about')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-300 focus:outline-none">About</button>
                <button onClick={() => scrollTo('#project')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-300 focus:outline-none">Projects</button>
                <button onClick={() => scrollTo('#testimonial')} className="block mt-4 mr-4 md:inline-block font-medium md:mt-0 text-gray-300 focus:outline-none">Testimonials</button>
                <button onClick={() => showContact()} className="transition duration-500 ease-in-out font-medium text-gray-300 mt-4 md:bg-primary md:transform md:hover:scale-105 md:text-white md:mt-0 md:py-2 md:px-4 md:rounded-full focus:outline-none">Have a chat</button>
            </div>
        </>
    )
}

export default NavbarItems