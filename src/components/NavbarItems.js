import React from "react"

const NavbarItems = () => {
    return (
        <>
            {/* Menu items for the navigation */}
            <div className="text-sm lg:flex-grow lg:text-right">
                <a href="#home" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Home</a>
                <a href="#about" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">About</a>
                <a href="#projects" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Projects</a>
                <a href="#testimonials" className="block mt-4 mr-4 lg:inline-block font-medium lg:mt-0 text-gray-500">Testimonials</a>
                <button className="font-medium text-gray-500 mt-4 lg:bg-orange-500 lg:hover:bg-orange-700 lg:text-sm lg:text-white lg:font-semibold lg:mt-0 lg:py-2 lg:px-4 lg:rounded-full">Have a chat</button>
            </div>
        </>
    )
}

export default NavbarItems