import React from "react";
import {Outlet} from "react-router-dom"
import Data from "../../components/DataDisplay/index";
import '../../styles/GeneralSetting/styles.css'
import styled from 'styled-components'

const MainContainer = styled.main`
    display:flex;
    justify-content: center;
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