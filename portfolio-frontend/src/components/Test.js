import React from "react"
//import { TestWrapper } from "../elements/TestWrapper"
import styled from "styled-components"

const TestWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: block;
  p {
    color: #ff0000;
  }
`

export const Test = () => {
  return (
    <>
      <TestWrapper>
        <p>Test</p>
      </TestWrapper>
    </>
  )
}
