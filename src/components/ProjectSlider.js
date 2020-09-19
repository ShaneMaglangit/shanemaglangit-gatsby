import React from "react"
import Slider from "react-slick"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function ProjectSlider(props) { 
    return(
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
                                            ...GatsbyImageSharpFluid
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
                                            ...GatsbyImageSharpFluid
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
            render={data => <ProjectSliderLayout data={data} {...props} />}
        />
    )
}

class ProjectSliderLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "software",
            project: this.props.data.software
        };
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            variableWidth: true
        };

        return (
            <>
                <div>
                    <button onClick={() => this.setState({ project: this.props.data.software, selected: "software"})} className={`${ this.state.selected === "software" ? `bg-primary` : `bg-none`} border-2 border-primary text-sm text-white font-semibold py-2 px-4 my-2 mx-2 focus:outline-none`}>
                        Software Projects
                    </button>
                    <button onClick={() => this.setState({ project: this.props.data.website, selected: "website" })} className={`${ this.state.selected !== "software" ? `bg-primary` : `bg-none`} border-2 border-primary text-sm text-white font-semibold py-2 px-4 my-2 mx-2 focus:outline-none`}>Website Projects</button>
                </div>
                <div className="w-full mt-4">
                    <Slider {...settings}>
                        {this.state.project.edges.map(edges => {
                            return (
                                <div className="px-3" style={{width: 700}}>
                                    <a href={edges.node.url} target="_blank" rel="noreferrer" className="w-full focus:outline-none">
                                        { edges.node.preview.childImageSharp !== null &&
                                            <Img 
                                                fluid={edges.node.preview.childImageSharp.fluid} 
                                                alt="Gatsby and Tailwind CSS together"
                                                objectFit="contain"
                                            />
                                        }
                                        { edges.node.preview.extension === "svg" &&
                                            <img 
                                                className="w-full bg-light-dark"
                                                src={edges.node.preview.publicURL} 
                                                alt="Gatsby and Tailwind CSS together"
                                            />
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