import React from "react"

const CallToAction = ({ showContact }) => {
    return (
        <>
            <div className="w-full mx-auto flex flex-col items-center justify-center py-20">
                <div className="w-full flex flex-col items-center">
                    <span className="text-sm text-primary font-semibold pr-2">
                    Collaborate
                    </span>
                    <h1 className="px-4 p-3 text-2xl md:text-3xl text-center text-white font-bold">
                    Have a project idea? Let's talk about it.
                    </h1>
                    <button onClick={() => showContact()} className="transition duration-500 ease-in-out transform hover:scale-105 font-semibold rounded bg-primary text-white py-4 px-8 focus:outline-none">
                    CONTACT ME
                    </button>
                </div>
            </div>
        </>
    )
}

export default CallToAction