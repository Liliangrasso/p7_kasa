import React from "react";
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from '../../logo.svg'
import styled from 'styled-components'
import '../../styles/Navbar/styles.css'

const HeaderContainer = styled.header`
    padding: 20px;
    display: flex;
    align-items: center;
`
const StyledLink = styled(Link)`
    padding: 10px;
    color: #FF6060;
    text-decoration: none;
    font-size: 18px;
    @media (min-width: 450px){
        font-size: 20px; 
    }
`
const NavContainer = styled.nav`
    position: absolute;
    right: 20px
`


function Navbar(){
    return (
        <HeaderContainer>
            <Logo className="logo" />
            <NavContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Navbar;