import React from "react"

const Contact = () => {
    return (
        <>
            <div id="contact" className="w-full flex-grow min-h-screen flex flex-col justify-around">
                <div className="w-10/12 mx-auto flex content-start ">
                    <div className="flex flex-col w-100 px-4 w-full md:w-1/2 mt-8 sm:mt-8">
                        <p className="text-sm text-primary font-semibold pr-2">
                            Get in touch
                        </p>
                        <h1 className="text-6xl text-left text-white font-bold sm:text-3xl">
                            Reach me through
                        </h1>
                        <a href="https://www.facebook.com/ShaneDMaglangit/" target="_blank" rel="noreferrer" className="flex items-center my-4">
                            <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                            </svg>
                            <div className="ml-2">
                                <p className="text-xs text-white opacity-50">Facebook</p>
                                <h4 className="text-md text-white font-medium">facebook.com/ShaneDMaglangit</h4>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ShaneMaglangit/" target="_blank" rel="noreferrer"  className="flex items-center my-4">
                            <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                            </svg>
                            <div className="ml-2">
                                <p className="text-xs text-white opacity-50">LinkedIn</p>
                                <h4 className="text-md text-white font-medium">linkedin.com/in/ShaneMaglangit</h4>
                            </div>
                        </a>
                        <a href="https://github.com/shanemaglangit" target="_blank" rel="noreferrer" className="flex items-center my-4">
                            <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                            </svg>
                            <div className="ml-2">
                                <p className="text-xs text-white opacity-50">GitHub</p>
                                <h4 className="text-md text-white font-medium">github.com/ShaneMaglangit</h4>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col  w-100 px-4 w-full md:w-1/2 mt-8 sm:mt-8">
                        <p className="text-sm text-primary font-semibold pr-2">
                            Talk with me
                        </p>
                        <h1 className="text-6xl text-left text-white font-bold sm:text-3xl">
                            Send me a message
                        </h1>
                        <form method="post" action="https://getform.io/f/57b2a2c7-99d0-4771-91e8-090a26eb3aee">
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