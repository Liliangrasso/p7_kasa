import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { useState } from "react";
import '../../styles/Collapse/style.css'
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

const CollapseContainer = styled.div`
    width: 90%;
    margin: auto;
    @media (min-width: 992px){
        width: 70%;
    }
`
const Item = styled.div`
    background-color: #F6F6F6;
    border-radius: 10px;
    margin-bottom: 20px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #FF6060;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    cursor: pointer;
`
const ItemTitle = styled.p`
    color: white;
`
const SignTitle = styled.span`
    position: absolute;
    right: 17%;
    font-size: 25px;
    color: white;
`
const ItemDescription = styled.p`
    color: #FF6060;
    text-align: center;
`
const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

function Collapse({title, description} ){
    const [active, setActive] = useState(false)

    const toggle = i => {
        console.log(i)
        setActive(!active)
    }
    return (
        <CollapseContainer>
                <Item >
                    <TitleContainer  onClick={toggle}>
                        <ItemTitle>{title}</ItemTitle>
                        <SignTitle>{active ? <FaChevronDown/> : <FaChevronUp /> }</SignTitle>                           
                    </TitleContainer>
                    <DescriptionContainer>
                        <ItemDescription className={active ? 'descriptionOpen' : 'descriptionClose'}>{description}</ItemDescription>
                    </DescriptionContainer> 
                </Item> 
        </CollapseContainer>
    )
}
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}
Collapse.defaultProps = {
        title: 'Mon titre par défaut',
    }

export default Collapse;