import React, {useState} from "react"
import NavbarItems from "./NavbarItems"

function Navbar () {
    const [isExpanded, toggleExpansion] = useState(false)
    return (
        <>
            {/* Wrapper for the navigation bar */}
            <nav className="fixed flex flex-wrap items-center justify-between w-full bg-darker p-6 z-auto">
                {/* Site logo */}
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current text-orange-500 h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                    </svg>
                    <span className="font-semibold text-xl tracking-tight">ShaneMaglangit</span>
                </div>
                {/* Hamburger icon */}
                <div className="block md:hidden" onClick={() => toggleExpansion(!isExpanded)} onKeyPress={() => toggleExpansion(!isExpanded)} role="button" tabIndex={0}>
                    <button className="flex items-center px-3 py-2 border rounded text-orange-500 border-orange-500 focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                {/* Wrapper for the navigation items */}
                <div id="menu-items" className={`${ isExpanded ? `block` : `hidden`} w-full flex-grow md:flex md:items-center md:w-auto md:block`}>
                    <NavbarItems />
                </div>
            </nav>
        </>
    )
}

export default Navbar