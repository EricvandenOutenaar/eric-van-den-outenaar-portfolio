import React from "react"
import styled from "styled-components"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin/>,
    url: "https://www.linkedin.com/in/vandenoutenaar/",
  },  
  {
    id: 2,
    icon: <FaTwitterSquare />,
    url: "https://twitter.com/EricOutenaar",
  },
  {
    id: 3,
    icon: <FaFacebookSquare/>,
    url: "https://m.facebook.com/eric.vandenoutenaar",
  },
]

const StyledSocialLink = styled.a`
  
`

  
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url}>
        {link.icon}
      </a>
    </li>
  )
})

const StyledList = styled.ul`
  margin-top: 1rem;
  width: 10rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.75rem;
  
  a{
    font-size: 1.75rem;
  color: ${({  theme, type  })  => type==="footer" ? theme.colors.white : theme.colors.grey1 };
  transition: ${({  theme  })  => theme.transitions.transition};
  :hover {
      color: ${({  theme  })  => theme.colors.primary5};
  
  }
  }

  li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  li:nth-of-type(4) {
    animation-delay: 1s;
  }
  li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
`

export default ({type}) => {
  return (
    <StyledList type={type}>{links}</StyledList>
  )
}
