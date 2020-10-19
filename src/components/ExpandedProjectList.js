import React from "react"
import { graphql, StaticQuery } from "gatsby"

// Queries the data and render the project slider
const ExpandedProjectList = ({props, category}) => { 
    return(
        // Static graphql query for retrieving the json data from ./content/projects.json
        // The data is seperated by their project category
        <StaticQuery
            query={
                graphql`query AllProjectsQuery {
                    software: allProjectsJson(filter: {category: {eq: "software"}}) {
                        edges {
                            node {
                                title
                                description
                                category
                                preview {
                                    childImageSharp {
                                        fluid {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                    }
                                    extension
                                    publicURL
                                }
                                url
                            }
                        }
                    }
                    website: allProjectsJson(filter: {category: {eq: "website"}}) {
                        edges {
                            node {
                                title
                                description
                                category
                                preview {
                                    childImageSharp {
                                        fluid {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                    }
                                    extension
                                    publicURL
                                }
                                url
                            }
                        }
                    }
                }`
            }
            // Pass the data to the layout and render
            render={data => <ExpandedProjectListLayout data={data} category={category} {...props} />}
        />
    )
}

const ExpandedProjectListLayout = ({data, category}) => {
    var projects;
    
    if(category === "software") projects = data.software 
    else projects = data.website;

    return (
        <>
            {projects.edges.map(edges => {
                return(
                    <div className="w-11/12 mx-auto my-4 flex items-center">
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

export default ExpandedProjectList