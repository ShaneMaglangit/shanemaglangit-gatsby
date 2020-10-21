import React from "react"

const Statistics = () => {
    let clientCount = 20;
    let websiteCount = 11;
    let softwareCount = 31;

    let startDate = new Date(2019, 9, 8, 0, 0, 0, 0);
    let daysAsDeveloper = getDateDiff(new Date(), startDate);

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
                    <StatisticsItem value={daysAsDeveloper} description={`days since my first project`} />
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-1 md:py-2">
                    <StatisticsItem value={clientCount} description={`satisfied and happy clients`} />
                </div>
                <div className="w-full md:w-1/2 md:pr-2 py-1 md:py-2">
                    <StatisticsItem value={softwareCount} description={`software projects completed`} />
                </div>
                <div className="w-full md:w-1/2 md:pl-2 py-1 md:py-2">
                    <StatisticsItem value={websiteCount} description={`websites built and deployed`} />
                </div>
            </div>
        </>
    )
}

const StatisticsItem = ({value, description}) => {
    return (
        <>
            <div className="w-full bg-light-dark flex items-stretch">
                <div className="bg-primary w-1 border border-primary"></div>
                <div className="flex items-center flex-grow py-4 px-6 md:px-10">
                    <h2 className="text-2xl md:text-5xl lg:text-4xl text-right text-primary font-bold">{value}</h2>
                    <h3 className="text-base md:text-lg pl-4 text-white">{description}</h3>
                </div>
            </div>
        </>
    )
}

export default Statistics