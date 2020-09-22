import React from "react"

const Contact = () => {
    return (
        <>
            {/* Main wrapper for the contact section */}
            <div id="contact" className="w-full flex-grow xl:h-screen flex flex-col justify-around">
                <div className="w-11/12 xl:w-10/12 mx-auto flex-wrap md:flex-no-wrap flex content-start py-12 md:py-16 xl:py-12">
                    {/* Left section containing the social links */}
                    <div className="flex flex-col w-100 px-4 w-full md:w-1/2">
                        <p className="text-sm text-primary font-semibold pr-2">
                            Get in touch
                        </p>
                        <h1 className="text-xl lg:text-3xl text-left text-white font-bold">
                            Reach me through
                        </h1>
                        <a href="https://www.facebook.com/ShaneDMaglangit/" target="_blank" rel="noreferrer" className="flex items-center my-4">
                            <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>
                            <div className="ml-2">
                                <p className="text-xs text-white opacity-50">Facebook</p>
                                <h4 className="text-sm lg:text-base text-white font-medium">facebook.com/ShaneDMaglangit</h4>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ShaneMaglangit/" target="_blank" rel="noreferrer"  className="flex items-center my-4">
                            <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                            <div className="ml-2">
                                <p className="text-xs text-white opacity-50">LinkedIn</p>
                                <h4 className="text-sm lg:text-base text-white font-medium">linkedin.com/in/ShaneMaglangit</h4>
                            </div>
                        </a>
                        <a href="https://github.com/shanemaglangit" target="_blank" rel="noreferrer" className="flex items-center my-4">
                            <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
                                <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                            </svg>
                            <div className="ml-2">
                                <p className="text-xs text-white opacity-50">GitHub</p>
                                <h4 className="text-sm lg:text-base text-white font-medium">github.com/ShaneMaglangit</h4>
                            </div>
                        </a>
                    </div>
                    {/* Right section containing the contact form */}
                    <div className="flex flex-col mt-10 md:mt-0 w-100 px-4 w-full md:w-1/2">
                        <p className="text-sm text-primary font-semibold pr-2">
                            Talk with me
                        </p>
                        <h1 className="text-xl lg:text-3xl text-left text-white font-bold">
                            Send me a message
                        </h1>
                        <form method="post" action="***REMOVED***">
                            <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full bg-light-dark text-sm text-white placeholder-white placeholder-opacity-25 p-4 mt-3 focus:outline-none"/>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full bg-light-dark text-sm text-white placeholder-white placeholder-opacity-25 p-4 mt-3 focus:outline-none"/>
                            <textarea row="5" name="message" id="message" placeholder="Enter your message" className="w-full bg-light-dark text-sm text-white placeholder-white placeholder-opacity-25 p-4 mt-3 focus:outline-none"/>
                            <button type="submit" className="bg-primary hover:bg-orange-700 text-sm text-white font-semibold py-2 px-4 mt-2 rounded-none focus:outline-none">Send message</button>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Contact