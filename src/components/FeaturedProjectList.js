import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import BackgroundImage from "gatsby-background-image"

// Queries the data and render the project slider
const FeaturedProjectList = ({data}) => { 
    return (
        <>
            <div className="w-full md:w-11/12 mx-auto flex flex-row flex-wrap p-4 md:p-0">
                {data.edges.map(edges => {
                    return(
                        <div key={edges.node.id} className="w-full mx-auto mb-6 md:mb-4 flex flex-wrap shadow-md items-center bg-dark-accent">
                            {edges.node.preview !== null &&
                                <BackgroundImage
                                    className="w-full md:w-5/12 h-64 bg-light-dark" 
                                    fluid={edges.node.preview.childImageSharp.fluid} 
                                    alt={edges.node.title}
                                    objectFit="cover" />
                            }
                            {edges.node.preview === null &&
                                <div className="w-full md:w-5/12 h-64 bg-light-dark flex justify-center items-center">
                                    <svg className="fill-current text-dark-accent mr-2 opacity-50" width="128" height="128" viewBox="0 0 130.915 66.438" xmlns="https://www.w3.org/2000/svg">
                                        <path d="M96.5,35.7l-2.1-3.3C80.6,10.8,55.2-.6,30.2,4.1,17.1,6.6,6.5,12.9,1.2,25.9c-2,5-1.7,5.5,3.6,5.3,8.8-.3,15.9,3.3,21.7,9.5,4,4.2,8.2,8.4,11.4,13.2C44.5,63.7,53.7,67,65,66.3c1.7-.1,3.3-.1,5-.3,12.8-1,22.7-6.3,27.9-18.6,1.2-2.8,2.4-3.5,5.6-2.9,7.8,1.5,11.7-1.8,11.9-9.7a40.2,40.2,0,0,0-2.6-15.7C106.8,2.8,88-4.9,72.6,3.2,84.3,11.5,94.7,20.5,96.5,35.7Z"/>
                                        <path d="M112.6,8.2c1.7,3.5,3,6,4,8.6a37.5,37.5,0,0,1,2.2,8.6c.8,6.3.9,6.5,6.4,3.2a37.117,37.117,0,0,0,3.2-2.3c3.5-2.6,3.3-5.4.2-8.1A48.007,48.007,0,0,0,112.6,8.2Z"/>
                                    </svg>
                                </div>
                            }
                            <div className="w-full md:w-7/12 flex-grow p-4 md:pl-10">
                                <h1 className="text-base md:text-xl text-primary font-semibold">{edges.node.title}</h1>
                                <h2 className="text-sm md:text-base text-white mt-2 mb-4">{edges.node.description}</h2>
                                <div className="flex">
                                    { edges.node.source !== null && edges.node.source !== "" &&
                                        <OutboundLink href={edges.node.source} target="_blank" rel="noreferrer">
                                            <svg className="fill-current text-gray-400 h-4 w-4 md:h-6 md:w-6 mr-2" width="54" height="54" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 480 512">
                                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>    
                                            </svg>
                                        </OutboundLink>
                                    }
                                    { edges.node.ref !== null && edges.node.ref !== "" &&
                                        <OutboundLink href={edges.node.ref} target="_blank" rel="noreferrer">
                                            <svg className="fill-current text-gray-400 h-4 w-4 md:h-6 md:w-6 mr-2" width="54" height="54" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="launch" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>  
                                            </svg>
                                        </OutboundLink>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
// {/*  */}

export default FeaturedProjectList