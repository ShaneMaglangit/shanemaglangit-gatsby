import React from "react"
import Slider from "react-slick"
import { graphql, StaticQuery } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BackgroundImage from 'gatsby-background-image'

// Queries the data and render the project slider
export default function ProjectSlider(props) { 
    return(
        // Static graphql query for retrieving the json data from ./content/projects.json
        // The data is seperated by their project category
        <StaticQuery
            query={
                graphql`query ProjectQuery {
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
            render={data => <ProjectSliderLayout data={data} {...props} />}
        />
    )
}

const ProjectPreviewOverlay = ({data}) => {
    return(
        <>
            {/* An overlay for the project previous containing the project title and description */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-transparent-dark">
                <h3 className="text-shadow text-xl text-primary font-bold">{data.title}</h3>
                <p className="text-shadow text-white text-sm">{data.description}</p>
            </div>
        </>
    )
}

class ProjectSliderLayout extends React.Component {
    constructor(props) {
        super(props);
        // useState of the component
        this.state = {
            // Set the default selected category to software
            selected: "software",
            // Set the default selected projects as the ones categorized with software
            project: this.props.data.software
        };
    }

    render() {
        // Settings for the react-slick carousel
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            swipeToSlide: true,
            speed: 500,
            variableWidth: true   
        };

        return (
            <>
                {/* Upper section */}
                <div>
                    <button onClick={() => this.setState({ project: this.props.data.software, selected: "software"})} className={`${ this.state.selected === "software" ? `bg-primary` : `bg-none`} border-2 border-primary text-sm text-white font-semibold py-2 px-4 my-2 mx-2 focus:outline-none`}>
                        Software Projects
                    </button>
                    <button onClick={() => this.setState({ project: this.props.data.website, selected: "website" })} className={`${ this.state.selected !== "software" ? `bg-primary` : `bg-none`} border-2 border-primary text-sm text-white font-semibold py-2 px-4 my-2 mx-2 focus:outline-none`}>Website Projects</button>
                </div>
                {/* Carousel section wrapper */}
                <div className="w-full mt-4">
                    {/* Creates a react-slick slider */}
                    <Slider {...settings}>
                        {/* Iterates through the project data and create elements for each of it */}
                        {this.state.project.edges.map(edges => {
                            return (
                                <div className="px-3 h-screen-60" style={{ width: 700 }}>
                                    <a href={edges.node.url} target="_blank" rel="noreferrer" className="w-full focus:outline-none">
                                        {/* Create a BackgroundImage element if the preview provided is in an image format */}
                                        { edges.node.preview !== null && edges.node.preview.childImageSharp !== null &&
                                            <BackgroundImage 
                                                className="relative w-full h-full flex flex-col items-center justify-center shadow bg-light-dark"
                                                fluid={edges.node.preview.childImageSharp.fluid} 
                                                alt={edges.node.title}
                                                objectFit="contain"
                                            >
                                                <ProjectPreviewOverlay data={edges.node}/>
                                            </BackgroundImage>
                                        }
                                        {/* Create an div with background image if the provided preview is in an svg format */}
                                        { edges.node.preview !== null && edges.node.preview.extension === "svg" &&
                                            <div 
                                                className="relative w-full h-full flex flex-col items-center justify-center shadow bg-light-dark bg-cover bg-center"
                                                style={{ backgroundImage: `url(${edges.node.preview.publicURL})`}} 
                                                alt={edges.node.title}
                                            >
                                            <ProjectPreviewOverlay data={edges.node}/>
                                            </div>
                                        }
                                        {/* Create a div with default light-dark background when there is no preview given */}
                                        { edges.node.preview == null &&
                                            <div className="relative w-full h-full flex flex-col items-center justify-center shadow bg-light-dark">
                                                <ProjectPreviewOverlay data={edges.node}/>
                                            </div>
                                        }
                                    </a>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </>
        );
    }
}