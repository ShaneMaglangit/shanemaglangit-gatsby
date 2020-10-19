import React from "react"

const Statistics = () => {
    let clientCount = 20;
    let websiteCount = 20;
    let softwareCount = 40;
    let daysAsDeveloper = 50;

    return (
        <>
            <div className="w-full flex flex-wrap mt-2">
                <div className="w-full md:w-1/2 md:pr-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{daysAsDeveloper}</h2>
                            <h3 className="text-lg pl-4 text-white">DAYS AS A DEVELOPER</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{clientCount}</h2>
                            <h3 className="text-lg pl-4 text-white">HAPPY CLIENTS</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pr-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{softwareCount}</h2>
                            <h3 className="text-lg pl-4 text-white">SOFTWARE DEVELOPED</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{websiteCount}</h2>
                            <h3 className="text-lg pl-4 text-white">WEBSITES BUILT</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics