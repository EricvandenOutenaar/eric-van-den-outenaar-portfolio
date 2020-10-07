import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { Underline } from "../elements/Underline"
import styled from "styled-components"

// check in services constants - part needs to be modified to syled components
const StyledServices = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.grey10};
`

const ServicesContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  @media screen and (min-width: 676px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const ServiceCard = styled.article`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: ${({ theme }) => theme.radius.radius};
  text-align: center;
  -webkit-transition: ${({ theme }) => theme.transitions.transition};
  transition: ${({ theme }) => theme.colors.primary9};

  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: ${({ theme }) => theme.transitions.transition};
    transition: ${({ theme }) => theme.transitions.transition};
  }
  p {
    -webkit-transition: ${({ theme }) => theme.transitions.transition};
    transition: ${({ theme }) => theme.transitions.transition};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary5};
    color: ${({ theme }) => theme.colors.primary9};
  }
  :hover p {
    color: ${({ theme }) => theme.colors.primary9};
  }
  .service:hover .underline {
    background: ${({ theme }) => theme.colors.primary10};
  }
`
const Services = () => {
  return (
    <StyledServices>
      <Title title="Tjänster" />
      <ServicesContainer>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <ServiceCard key={id}>
              {icon}
              <h4>{title}</h4>
              <Underline />
              <p>{text}</p>
            </ServiceCard>
          )
        })}
      </ServicesContainer>
    </StyledServices>
  )
}

export default Services
