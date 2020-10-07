import React from "react"
import { Underline } from "../elements/Underline"
import styled from "styled-components"

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  font-style: italic;
`
// The title that will be placed above each section

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h2>{title || "default title"}</h2>
      <Underline />
    </StyledTitle>
  )
}

export default Title

/*
import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
*/
