import { Link } from "gatsby"
import React from "react"

const NavbarItems = () => {
    return (
        <>
            {/* Menu items for the navigation */}
            <div className="text-sm lg:flex-grow lg:text-right">
                <Link to="#header" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Home</Link>
                <Link to="#about" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">About</Link>
                <Link to="#project" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Projects</Link>
                <Link to="#testimonial" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Testimonials</Link>
                <button className="font-medium text-gray-500 mt-4 lg:bg-orange-500 lg:hover:bg-orange-700 lg:text-sm lg:text-white lg:font-semibold lg:mt-0 lg:py-2 lg:px-4 lg:rounded-full">Have a chat</button>
            </div>
        </>
    )
}

export default NavbarItems