import { graphql } from "gatsby"
import React from "react"
import FeaturedProjectList from "../../components/FeaturedProjectList"
import Layout from "../../components/Layout"
import { useStaticQuery } from "gatsby"
import ProjectList from "../../components/ProjectList"

const Web = (props) => {
  const data = useStaticQuery(graphql`
    query{
      featured: allStrapiProjects(filter: {category: {eq: "website"}, featured: {eq: true}}) {
        edges {
          node {
            id
            title
            description
            source
            ref
          }
        }
      }
      others: allStrapiProjects(filter: {category: {eq: "website"}, featured: {eq: false}}) {
        edges {
          node {
            id
            title
            description
            source
            ref
          }
        }
      }
    }
  `)

  return (
    <Layout location={props.location}>
        <main className="mt-0 md:mt-10">
          <div className="container flex-grow flex flex-col justify-around mx-auto">
            <div className="w-full md:w-11/12 mx-auto flex flex-row flex-wrap p-2 md:p-0">
                <FeaturedProjectList data={data.featured} />
            </div>
          </div>
          <div className="bg-darker py-2 md:py-0">
            <div className="container flex-grow flex flex-col justify-around mx-auto">
              <div className="w-11/12 mx-auto flex flex-row flex-wrap">
                <ProjectList data={data.others} />
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Web