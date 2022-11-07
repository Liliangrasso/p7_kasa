import React from "react";
import Slider from "../../components/Slider/index.jsx";
import '../../styles/GeneralSetting/styles.css'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import data from '../../utils/data.json'

const HouseContainer = styled.div`
    width: 100%;
    height: 100%;
`
const SliderContainer = styled.aside`
    width: 95%;
    height: 300px;
    margin: 0 auto;
    border-radius: 30px;
`

// Style Info
const InfoContainer = styled.section`

`

// Title and tag

const TitleTagsContainer = styled.div`

`
const Title = styled.div`

`
function Houses(){
    const { id } = useParams();
    const getHouses = data.find((object) => object.id === id)
    const slidePictures = getHouses.pictures;
    const tags = getHouses.tags;

    return (
        <HouseContainer  key={ id }>
            <SliderContainer>
                <Slider slides={slidePictures} />  
            </SliderContainer>
            <InfoContainer>
                <TitleTagsContainer>
                    <Title>
                        <h1>{getHouses.title}</h1>
                        <h2>{getHouses.location}</h2>
                    </Title>
                </TitleTagsContainer>

            </InfoContainer>
        </HouseContainer>
    )
}
/*
        <SliderContainer>
            <Slider slides={slides} />
        </SliderContainer>
*/

export default Houses;