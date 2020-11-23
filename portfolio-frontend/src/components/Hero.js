import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import ButtonLink from "./ButtonLink"
import {Underline}   from "./Underline"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"
import downloadFile from "../../static/cv.pdf"
import scrollTo from 'gatsby-plugin-smoothscroll';

// Here we define the Hero component 

const StyledHero = styled.header`
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  position: relative;
`
const HeroSection = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.widths.maxWidth};
  height: 100%;
  display: grid;
  align-items: center;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`

const ImageWrapper = styled.div`
  display: none;
 
@media screen and (min-width: 992px) {
    display: block;
    grid-column: 1/span 4;
    grid-row: 2 / span 2;
`

const HeroInfo = styled.article`
  background: ${({ theme }) => theme.colors.white};
  h1,
  h4 {
    text-transform: none;
  }
  @media screen and (min-width: 992px) {
    grid-column: 5 / span 8;
    grid-row: 3 / auto;
  }
`
const StyledButton = styled.button`
margin: 0.3rem 1rem 0.3rem 0;

a{
  color: ${({ theme }) => theme.colors.primary9};
  &:hover {
    color:${({ theme }) => theme.colors.primary1}
     
}
`

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <StyledHero>
      <HeroSection>
        <HeroInfo>
          <div>
            <h1>Jag heter Eric </h1>
            <Underline hero />
            <h4>Din nya systemutvecklare</h4>
            - 🔭 Jag läser mitt sista år av utbildningen Systemutvecklare.net
            <br />
            - 🌱 Jag jobbar extra som React-utvecklare
            <br />
            - 🤔 Intresserad av både frontend och backend
            <br />
            <div style={{ marginBottom: "1rem" }} />
            {
              // <ButtonLink to="/contact" name="Kontakta mig" />
            }
            <StyledButton>
              <a href={downloadFile} download>
              Ladda ner CV direkt
              </a>
              {` `}
              
            </StyledButton>
            <StyledButton onClick={() => scrollTo("#services")}>
              Vad jag erbjuder
            </StyledButton>
            <div style={{ marginBottom: "1rem" }} />
            <SocialLinks />
          </div>
        </HeroInfo>
        <ImageWrapper>
          <Image fluid={fluid} alt="portrait-image-eric-van-den-outenaar" />
        </ImageWrapper>
      </HeroSection>
    </StyledHero>
  )
}
export default Hero
