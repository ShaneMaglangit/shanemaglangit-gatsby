import React from "react"
import { graphql, StaticQuery } from "gatsby"

// Queries the data and render the project slider
const FeaturedProjectList = ({data}) => { 
    return (
        <>
            {data.edges.map(edges => {
                return(
                    <div className="w-full mx-auto my-4 px-2 flex items-center">
                        <div className="w-5/12 h-64 shadow bg-light-dark"></div>
                        <div className="w-7/12 flex-grow pl-10">
                            <h1 className="text-2xl text-primary font-semibold">{edges.node.title}</h1>
                            <h2 className="text-md text-white mt-2">{edges.node.description}</h2>
                            <button className="font-medium text-gray-300 mt-4 bg-light-dark text-white py-2 px-4 focus:outline-none">Source</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FeaturedProjectList