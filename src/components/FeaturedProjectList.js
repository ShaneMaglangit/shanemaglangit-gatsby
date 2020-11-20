import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Img from "gatsby-image"

// Queries the data and render the project slider
const FeaturedProjectList = ({data}) => { 
    return (
        <>
            <div className="w-full md:w-10/12 mx-auto flex flex-row flex-wrap p-4 md:p-0">
                {data.edges.map(edges => {
                    return(
                        <div key={edges.node.id} className="relative w-full xl:min-h-128 inline-block rounded-md">
                            <div className="w-6/12 h-full flex flex-col justify-center absolute z-20">
                                <div className="w-full bg-gray-100 shadow-md rounded-md p-8">
                                    <header className="">
                                        <h4 className="text-primary font-medium text-xs">Featured Project</h4>
                                        <h2 className="text-2xl font-semibold">{edges.node.title}</h2>
                                        <h3 className="text-sm">{edges.node.description}</h3>
                                    </header>
                                    <div className="flex opacity-70">
                                        { edges.node.source !== null && edges.node.source !== "" &&
                                            <OutboundLink href={edges.node.source} target="_blank" rel="noreferrer">
                                                <svg className="fill-current h-full mt-2 mr-2" width="18" height="18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 480 512">
                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>    
                                                </svg>
                                            </OutboundLink>
                                        }
                                        { edges.node.ref !== null && edges.node.ref !== "" &&
                                            <OutboundLink href={edges.node.ref} target="_blank" rel="noreferrer">
                                                <svg className="fill-current h-full mt-2 mr-2" width="18" height="18" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="launch" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>  
                                                </svg>
                                            </OutboundLink>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-7/12 flex flex-col items-center justify-center h-full absolute right-0 top-0 z-10">
                                {edges.node.preview !== null &&
                                    <Img
                                        className="w-full bg-light-dark"
                                        fluid={edges.node.preview.childImageSharp.fluid} 
                                        alt={edges.node.title} />
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FeaturedProjectList