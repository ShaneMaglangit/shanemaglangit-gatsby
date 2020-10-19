import { graphql } from "gatsby"
import React from "react"
import FeaturedProjectList from "../../components/FeaturedProjectList"
import Layout from "../../components/Layout"
import { useStaticQuery } from "gatsby"
import ProjectList from "../../components/ProjectList"

const Web = (props) => {
  const data = useStaticQuery(graphql`
    query{
      featured: allMysqlWebsiteProjects(filter: {featured: {eq: 1}}) {
        edges {
          node {
            id
            title
            description
            featured
            source
            view
            category
          }
        }
      }
      others: allMysqlWebsiteProjects(filter: {featured: {eq: 0}}) {
        edges {
          node {
            id
            title
            description
            featured
            source
            view
            category
          }
        }
      }
    }
  `)

  return (
    <Layout location={props.location}>
    <main className="mt-10">
      <div className="container flex-grow flex flex-col justify-around mx-auto">
        <div className="w-11/12 mx-auto flex flex-row flex-wrap">
            <FeaturedProjectList data={data.featured} />
        </div>
      </div>
      <div className="bg-darker">
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