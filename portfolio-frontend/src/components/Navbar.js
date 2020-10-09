import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import Links from "../constants/links"
import styled from "styled-components"

// I have have changed this Navbar component so it has styled components

const StyledNavBar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  border-style: none none solid none;
  border-width: 0rem 0rem 0.01rem 0rem;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: ${({ theme }) => theme.colors.primary11};
`

const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
}
`
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-bottom: 0.375rem;
  }
`
// This can be simplified later
const NavLink = styled.div`
  ul {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: flex-end;

      li {
        margin-right: 2rem;
      }
      a {
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
        letter-spacing: ${({ theme }) => theme.spacings.spacing};
        transition: ${({ theme }) => theme.transitions.transition};
        padding: 0.5rem 0;

        &:hover {
          color: ${({ theme }) => theme.colors.primary5};
          box-shadow: 0px 2px ${({ theme }) => theme.colors.primary5};
        }
      }
    }
  }
`
const ToggleButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.colors.primary5};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary2};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Navbar = ({ toggleSidebar }) => {
  return (
    <StyledNavBar>
      <NavCenter>
        <NavHeader>
          <img src={logo} alt="logo" />
          <ToggleButton  onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </ToggleButton>
        </NavHeader>
        <NavLink>
          <Links type="navbar"/>
        </NavLink>
      </NavCenter>
    </StyledNavBar>
  )
}
