import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

// Queries the data and render the project slider
const ProjectList = ({data}) => { 
    return (
        <>
            {data.edges.map(edges => {
                return(
                    <div className="w-full md:w-4/12 lg:w-3/12 my-2 md:my-4 md:px-2 flex items-center">
                        <div className="w-full h-40 p-6 flex-grow bg-light-dark">
                            <h1 className="text-base text-primary font-semibold">{edges.node.title}</h1>
                            <h2 className="text-sm text-white mt-2">{edges.node.description}</h2>
                            <OutboundLink href={edges.node.source} target="_blank" rel="noreferrer">
                                <button className="text-accent text-sm mt-2 focus:outline-none">
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

export default ProjectList