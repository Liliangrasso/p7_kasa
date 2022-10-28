import React from "react";
import styled from 'styled-components'

const ErrorContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #FF6060;
`
const ErrorTitle = styled.h1`
    font-size: 96px;
    margin-bottom: 0;
    @media (min-width: 992px){
        font-size: 288px; 
        margin-top: 50px;
    }
`
const ErrorSubstitle = styled.h2`
    font-size: 18px;
    margin-bottom: 60px;
    @media (min-width: 992px){
        font-size: 36px; 
    }
`
const ErrorLink = styled.a`
    color: #FF6060;
    font-size: 14px;
    @media (min-width: 992px){
        font-size: 18px;
        margin-bottom: 100px;
    }
`
function Error(){
    return (
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle>
            <ErrorSubstitle>Oups! La page que vous demandez n'existe pas.</ErrorSubstitle>
            <ErrorLink href="/">Retourner sur la page d’accueil</ErrorLink>
        </ErrorContainer>
    )
}

export default Error;