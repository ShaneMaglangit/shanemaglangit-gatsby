import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import BackgroundImage from "gatsby-background-image"
import notFoundImage from "../images/not-found-image.svg"

// Queries the data and render the project slider
const FeaturedProjectList = ({data}) => { 
    return (
        <>
            {data.edges.map(edges => {
                return(
                    <div className="w-full mx-auto mb-4 flex flex-wrap shadow-md items-center bg-dark-accent">
                        {edges.node.preview !== null &&
                            <BackgroundImage
                                className="w-full md:w-5/12 h-64 bg-light-dark" 
                                fluid={edges.node.preview.childImageSharp.fluid} 
                                alt={edges.node.title}
                                objectFit="contain" />
                        }
                        {edges.node.preview === null &&
                            <div className="w-full md:w-5/12 h-64 bg-light-dark flex justify-center items-center">
                                <svg className="fill-current text-dark-accent mr-2 opacity-50" width="128" height="128" viewBox="0 0 130.915 66.438" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M96.5,35.7l-2.1-3.3C80.6,10.8,55.2-.6,30.2,4.1,17.1,6.6,6.5,12.9,1.2,25.9c-2,5-1.7,5.5,3.6,5.3,8.8-.3,15.9,3.3,21.7,9.5,4,4.2,8.2,8.4,11.4,13.2C44.5,63.7,53.7,67,65,66.3c1.7-.1,3.3-.1,5-.3,12.8-1,22.7-6.3,27.9-18.6,1.2-2.8,2.4-3.5,5.6-2.9,7.8,1.5,11.7-1.8,11.9-9.7a40.2,40.2,0,0,0-2.6-15.7C106.8,2.8,88-4.9,72.6,3.2,84.3,11.5,94.7,20.5,96.5,35.7Z"/>
                                    <path d="M112.6,8.2c1.7,3.5,3,6,4,8.6a37.5,37.5,0,0,1,2.2,8.6c.8,6.3.9,6.5,6.4,3.2a37.117,37.117,0,0,0,3.2-2.3c3.5-2.6,3.3-5.4.2-8.1A48.007,48.007,0,0,0,112.6,8.2Z"/>
                                </svg>
                            </div>
                        }
                        <div className="w-full md:w-7/12 flex-grow p-4 md:pl-10">
                            <h1 className="text-2xl text-primary font-semibold">{edges.node.title}</h1>
                            <h2 className="text-md text-white mt-2">{edges.node.description}</h2>
                            { edges.node.source != null && edges.node.source != "" &&
                                <OutboundLink href={edges.node.source} target="_blank" rel="noreferrer">
                                    <button className="font-medium mr-2 text-gray-300 mt-4 bg-light-dark text-white py-2 px-4 focus:outline-none">
                                        Source
                                    </button>
                                </OutboundLink>
                            }
                            { edges.node.ref != null && edges.node.ref != "" &&
                                <OutboundLink href={edges.node.ref} target="_blank" rel="noreferrer">
                                    <button className="font-medium mr-2 text-gray-300 mt-4 bg-light-dark text-white py-2 px-4 focus:outline-none">
                                        View
                                    </button>
                                </OutboundLink>
                            }
                        </div>
                    </div>
                )
            })}
        </>
    )
}
// {/*  */}

export default FeaturedProjectList