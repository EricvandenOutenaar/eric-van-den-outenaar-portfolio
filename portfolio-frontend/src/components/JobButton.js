import React from "react"
import styled from "styled-components"

const StyledJobButton = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: ${({ theme }) => theme.spacings.spacing};
  margin: 0 0.5rem;
  transition: ${({ theme }) => theme.transitions.transition};
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;

  color: ${({ active, theme }) => active && theme.colors.primary5};
  box-shadow: ${({ active, theme }) =>
    active && `0 2px ${theme.colors.primary5}`};

  &:hover {
    color: ${({ theme }) => theme.colors.primary5};
    box-shadosetValue(index)

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;

    $:hover {
      box-shadow: ${({ theme }) => `-2px 0 ${theme.colors.primary5}`};
    }

    box-shadow: ${({ active, theme }) =>
      active && `-2px 0 ${theme.colors.primary5}}`};
  }
`
/*
     I created a jobsbutton that can toggle between active and not active
     I have created a render props in order to be able to use the SetValue function
     of the parent component for the onclick event
*/

const JobButton = ({ active, render = Function.prototype, item }) => {
  return (
    <>
      <StyledJobButton onClick={render} active={active}>
        {item}
      </StyledJobButton>
    </>
  )
}

export default JobButton
