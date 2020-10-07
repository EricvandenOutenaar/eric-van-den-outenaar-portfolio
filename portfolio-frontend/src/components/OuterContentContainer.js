import React from "react"
import styled from "styled-components"

const StyledOuterContentContainer = styled.section`
  padding: 5rem 0;
  background: ${({ theme, grey }) => grey && theme.colors.grey10};
`
/*
 I have turned the section class into this content container.
 Included an optional prop to make the background grey,
 to turn the grey color off and on - to distinct between sections... 
*/

const OuterContentContainer = ({ children, grey }) => {
  return <StyledOuterContentContainer grey={grey}>{children}</StyledOuterContentContainer>
}

export default OuterContentContainer;