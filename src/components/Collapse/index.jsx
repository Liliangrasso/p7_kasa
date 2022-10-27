import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { useState } from "react";
import '../../styles/Collapse/style.css'
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import cardData from '../../utils/data.json'

const CollapseWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const CollapseContainer = styled.div`
    width: 90%;
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
    right: 10%;
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

function Collapse(props){
    const nameValue = props.name
    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }
    console.log(cardData)
    let CollapseData = null;
    if(nameValue === "about"){
        CollapseData = aboutData;
    }else{
        CollapseData = cardData ;
    }
        return(
            <CollapseWrapper>
                <CollapseContainer>
                {CollapseData.map((item, i) => (
                       <Item key={item.id}>
                            <TitleContainer  onClick={() => toggle(i)}>
                                <ItemTitle>{item.title}</ItemTitle>
                                <SignTitle>{selected === i ? <FaChevronDown /> : <FaChevronUp />}</SignTitle>                           
                            </TitleContainer>
                            <DescriptionContainer>
                                <ItemDescription className={selected === i ? 'descriptionOpen' : 'descriptionClose'}>{item.description}</ItemDescription>
                            </DescriptionContainer> 
                       </Item> 
                    ))}
                </CollapseContainer>
            </CollapseWrapper>
        )
    }
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}
Collapse.defaultProps = {
        title: 'Mon titre par défaut',
    }

const aboutData = [
    {
        id: 1,
        title: "Fiabilité",
        description: "Des années de pratique",
    },
    {
        id: 2,
        title: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        id: 3,
        title: "Service",
        description: "Des années de pratique"
    },
    {
        id: 4,
        title: "Responsabilité",
        description: "Des années de pratique"
    }
]

export default Collapse;