import React from "react"

const Statistics = () => {
    let startDate = new Date(2019, 9, 8, 0, 0, 0, 0);
    let currentDate = new Date();

    let clientCount = 20;
    let websiteCount = 11;
    let softwareCount = 31;
    let daysAsDeveloper = getDateDiff(currentDate, startDate);

    function getDateDiff(x, y) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const xUTC = Date.UTC(x.getFullYear(), x.getMonth(), x.getDate());
        const yUTC = Date.UTC(y.getFullYear(), y.getMonth(), y.getDate());
        return Math.floor((xUTC - yUTC) / _MS_PER_DAY);
    }

    return (
        <>
            <div className="w-full flex flex-wrap mt-2">
                <div className="w-full md:w-1/2 md:pr-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{daysAsDeveloper}</h2>
                            <h3 className="text-lg pl-4 text-white">DAYS SINCE MY FIRST PROJECT</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{clientCount}</h2>
                            <h3 className="text-lg pl-4 text-white">SATISFIED AND HAPPY CLIENTS</h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pr-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{softwareCount}</h2>
                            <h3 className="text-lg pl-4 text-white">SOFTWARE PROJECTS COMPLETED </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-1 md:py-2">
                    <div className="w-full bg-light-dark flex items-stretch">
                        <div className="bg-primary w-1 border border-primary"></div>
                        <div className="flex items-center flex-grow py-4 px-10">
                            <h2 className="text-5xl text-right text-primary font-bold">{websiteCount}</h2>
                            <h3 className="text-lg pl-4 text-white">WEBSITES BUILT AND DEPLOYED</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics