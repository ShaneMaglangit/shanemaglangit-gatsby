import { Link } from "gatsby"
import React, {useState} from "react"
import NavbarItems from "./NavbarItems"

function Navbar ({ showContact }) {
    const [isExpanded, toggleExpansion] = useState(false)
    return (
        <>
            {/* Wrapper for the navigation bar */}
            <nav className="fixed flex flex-wrap items-center justify-between w-full bg-darker p-6 z-30">
                {/* Site logo */}
                <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 130.915 66.438" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96.5,35.7l-2.1-3.3C80.6,10.8,55.2-.6,30.2,4.1,17.1,6.6,6.5,12.9,1.2,25.9c-2,5-1.7,5.5,3.6,5.3,8.8-.3,15.9,3.3,21.7,9.5,4,4.2,8.2,8.4,11.4,13.2C44.5,63.7,53.7,67,65,66.3c1.7-.1,3.3-.1,5-.3,12.8-1,22.7-6.3,27.9-18.6,1.2-2.8,2.4-3.5,5.6-2.9,7.8,1.5,11.7-1.8,11.9-9.7a40.2,40.2,0,0,0-2.6-15.7C106.8,2.8,88-4.9,72.6,3.2,84.3,11.5,94.7,20.5,96.5,35.7Z"/>
                        <path d="M112.6,8.2c1.7,3.5,3,6,4,8.6a37.5,37.5,0,0,1,2.2,8.6c.8,6.3.9,6.5,6.4,3.2a37.117,37.117,0,0,0,3.2-2.3c3.5-2.6,3.3-5.4.2-8.1A48.007,48.007,0,0,0,112.6,8.2Z"/>
                    </svg>
                    <span className="font-semibold text-xl tracking-tight">ShaneMaglangit</span>
                </Link>
                {/* Hamburger icon */}
                <div className="block md:hidden" onClick={() => toggleExpansion(!isExpanded)} onKeyPress={() => toggleExpansion(!isExpanded)} role="button" tabIndex={0}>
                    <button className="flex items-center px-3 py-2 border rounded text-primary border-primary focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                {/* Wrapper for the navigation items */}
                <div id="menu-items" className={`${ isExpanded ? `block` : `hidden`} w-full flex-grow md:flex md:items-center md:w-auto md:block`}>
                    <NavbarItems showContact={showContact} />
                </div>
            </nav>
        </>
    )
}

export default Navbar