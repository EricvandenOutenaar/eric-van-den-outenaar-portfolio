import React from "react"
import { Underline } from "../elements/SmallElements"
import styled from "styled-components"

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  font-style: italic;
`

const Title = ({ title }) => {
  return (
    <StyledTitle>
      <h2>{title || "default title"}</h2>
      <Underline />
    </StyledTitle>
  )
}

export default Title
