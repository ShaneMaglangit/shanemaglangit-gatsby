import { graphql } from "gatsby"
import React from "react"
import FeaturedProjectList from "../../components/FeaturedProjectList"
import Layout from "../../components/Layout"
import { useStaticQuery } from "gatsby"
import ProjectList from "../../components/ProjectList"

const Software = (props) => {
  const data = useStaticQuery(graphql`
    query {
      featuredSoftware: allStrapiProjects(filter: {category: {eq: "software"}, featured: {eq: true}}) {
        edges {
          node {
            id
            title
            description
            source
            ref
            preview {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
              extension
              publicURL
            }
          }
        }
      }
      software: allStrapiProjects(filter: {category: {eq: "software"}, featured: {eq: false}}) {
        edges {
          node {
            id
            title
            description
            source
            ref
            preview {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  `)

  return (
    <Layout location={props.location}>
        <main className="mt-0 md:mt-10">
          <div className="container flex-grow flex flex-col justify-around mx-auto">
            <FeaturedProjectList data={data.featuredSoftware} />
          </div>
          <div className="bg-darker py-2 md:py-4">
            <div className="container mx-auto">
              <div className="w-11/12 mx-auto flex items-stretch flex-wrap">
                <ProjectList data={data.software} />
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Software