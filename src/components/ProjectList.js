import React from "react"
import { graphql, StaticQuery } from "gatsby"

// Queries the data and render the project slider
const ProjectList = ({data}) => { 
    return (
        <>
            {data.edges.map(edges => {
                return(
                    <div className="w-3/12 my-4 px-2 flex items-center">
                        <div className="w-full h-40 p-6 flex-grow bg-light-dark">
                            <h1 className="text-base text-primary font-semibold">{edges.node.title}</h1>
                            <h2 className="text-sm text-white mt-2">{edges.node.description}</h2>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectList