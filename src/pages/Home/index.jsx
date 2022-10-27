import React from "react";
import {Outlet} from "react-router-dom"
import Data from "../../components/DataDisplay/index";
import styled from 'styled-components'

const MainContainer = styled.main`
    background-color: #F6F6F6;
    margin-right: 30px;
    margin-left: 30px;
    border-radius: 25px 25px 0px 25px;
`
function Home(){
    return (
        <MainContainer>
            <Outlet />
            <Data />
        </MainContainer>
    )
}

export default Home;