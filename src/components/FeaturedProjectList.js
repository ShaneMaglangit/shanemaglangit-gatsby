import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

// Queries the data and render the project slider
const FeaturedProjectList = ({data}) => { 
    return (
        <>
            {data.edges.map(edges => {
                return(
                    <div className="w-full mx-auto my-4 flex flex-wrap shadow-md items-center">
                        <div className="w-full md:w-5/12 h-64 bg-light-dark"></div>
                        <div className="w-full md:w-7/12 flex-grow p-4 md:pl-10">
                            <h1 className="text-2xl text-primary font-semibold">{edges.node.title}</h1>
                            <h2 className="text-md text-white mt-2">{edges.node.description}</h2>
                            <OutboundLink href={edges.node.source} target="_blank" rel="noreferrer" className="">
                                <button className="font-medium text-gray-300 mt-4 bg-light-dark text-white py-2 px-4 focus:outline-none">
                                    Source
                                </button>
                            </OutboundLink>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
// {/*  */}

export default FeaturedProjectList