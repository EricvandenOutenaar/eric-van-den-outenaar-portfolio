import React from "react"
import styled from "styled-components"

/*
     I have created a button component out of the global class 
     I could have also added this button styling in the global styles 
     but I would have had to create a component for the center button anyhow. 
     I have to decided to make one button component that can either be a 'standard'
     button or a center button.
*/
const StyledButton = styled.button`

    text-transform: uppercase;
    background:  ${({ theme }) => theme.colors.primary5};;
    color:  ${({ theme }) => theme.colors.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${({ theme }) => theme.spacings.spacing};
    font-weight: 700;
    -webkit-transition: ${({ theme }) => theme.transitions.transition};
    transition: ${({ theme }) => theme.transitions.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.radius.radius};
    display: ${({ center }) => (center ? "block" : "inline-block")};
    width: ${({ center }) => center && "12rem"};
    text-align:  ${({ center }) => center && "center"};
    margin: ${({ center }) => center && "0 auto"};
    margin-top: ${({ center }) => center && "3rem"};
  
  &:hover {
    color:${({ theme }) => theme.colors.primary1}
    background: ${({ theme }) => theme.colors.primary8};
  }

`

export const Button = ({ center }) => {
  return <StyledButton center={center}></StyledButton>
}