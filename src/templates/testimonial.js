import React from "react"
import { graphql } from "gatsby"

export default class Testimonial extends React.Component {
    render() {
        const testimonials = this.props.data.allMarkdownRemarks.edges
        return(
            <>
            {testimonials.map(({node}) => {
                const text = node.frontmatter.title || node.fields.slug
            return <div key={node.fields.slug}>{title}</div>
            })}
            </>
        )
    }
}

export const testimonialsQuery = graphl`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
        skip: $skip
        ) {
            edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
        }
    }
}`