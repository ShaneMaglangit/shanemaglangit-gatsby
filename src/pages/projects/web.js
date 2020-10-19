import React from "react"
import ExpandedProjectList from "../../components/ExpandedProjectList"
import Layout from "../../components/Layout"

const Web = (props) => {
  return (
    <Layout location={props.location}>
        <main className="container mx-auto flex-grow flex flex-col justify-around mt-10">
            <div className="w-11/12 mx-auto flex flex-row flex-wrap">
                <ExpandedProjectList category="website" />
            </div>
        </main>
    </Layout>
  )
}

export default Web