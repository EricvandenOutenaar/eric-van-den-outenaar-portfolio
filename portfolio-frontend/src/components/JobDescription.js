import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { FaAngleDoubleRight } from "react-icons/fa"

const StyledJobDescription = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;

  p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
`

const JobDescription = ({ name }) => {
  // We need to get access to the color property from theme.js
  const { colors } = useContext(ThemeContext)

  return (
    <StyledJobDescription>
      <FaAngleDoubleRight
        style={{ color: colors.primary5 }}
      ></FaAngleDoubleRight>
      <p>{name}</p>
    </StyledJobDescription>
  )
}

export default JobDescription
