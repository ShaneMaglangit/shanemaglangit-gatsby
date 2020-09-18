import { a } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <>
        <footer className="py-4 text-center bg-darker text-gray-600 text-xs">
            {/* Site logo */}
            <div className="mx-auto flex items-center flex-shrink-0 justify-center text-white mr-6">
                <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
            </div>
            <div className="py-4">
                <a href="https://github.com/shanemaglangit" target="_blank" rel="noreferrer" className="px-2 text-primary">GitHub</a>
                <a href="https://www.facebook.com/Scoobidiboopao" target="_blank" rel="noreferrer" className="px-2 text-primary">LinkedIn</a>
                <a href="https://www.aedin.com/in/shanemaglangit/" target="_blank" rel="noreferrer" className="px-2 text-primary">Facebook</a>
            </div>
            <h3 className="text-lg text-white font-semibold my-2">Walking towards my goal one step at a time</h3>
            Handcrafter by me &copy; 2020
        </footer>
    </>
  )
}

export default Footer
