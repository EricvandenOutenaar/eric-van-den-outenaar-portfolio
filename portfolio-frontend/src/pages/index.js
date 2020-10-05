import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import { Test } from "../components/Test"
import Blogs from "../components/Blogs"
import styled from "styled-components"

const styledP = styled.div`
  color: #ff0000;
`
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={projects} title="projekt i fokus" showLink />
      </Layout>
      <styledP>
        <p>Test p tag</p>
      </styledP>
      <Test></Test>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
