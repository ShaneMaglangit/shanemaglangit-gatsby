import React from "react"

const CallToAction = ({ showContact }) => {
    return (
        <>
            <div className="w-full mx-auto flex flex-col items-center justify-center py-20">
                <div className="container w-full flex flex-col items-center">
                    <span className="text-sm text-primary font-semibold pr-2">
                    Collaborate
                    </span>
                    <h1 className="px-4 p-3 text-2xl md:text-3xl text-center text-white font-bold">
                    Have a project idea? Let's talk about it.
                    </h1>
                    <button onClick={() => showContact()} className="relative transition duration-500 ease-in-out transform hover:scale-105 font-semibold rounded-full bg-primary text-white py-3 px-6 focus:outline-none">
                    CONTACT ME
                        <span className="absolute top-0 right-0 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CallToAction