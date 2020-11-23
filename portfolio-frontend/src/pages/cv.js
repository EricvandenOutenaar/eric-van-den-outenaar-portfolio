import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import styled from "styled-components"
import downloadFile from "../../static/cv.pdf"

// Here we define the projects page

const CVContainer = styled.section`
  background: ${({ theme }) => theme.colors.grey10};
  height: 100vh;
  width: 100vw;
  text-align: center;
  padding-top: 5rem;
  h2,
  button {
    margin: 2rem 0 0 0;
  }
`
const CVButton = styled.button`
a{
    color: ${({ theme }) => theme.colors.primary9};
    &:hover {
      color:${({ theme }) => theme.colors.primary1}
       
  }`
const CVPage = () => {
  return (
    <Layout>
      <SEO title="CV" description="Erics CV" />
      <CVContainer>
        <h2>Vill du veta mer om min arbetslivserfarenhet?</h2>
        <CVButton>
          <a href={downloadFile} download>
            Ladda ner mitt fullständiga CV
          </a>
          {` `}
        </CVButton>
      </CVContainer>
    </Layout>
  )
}

export default CVPage
