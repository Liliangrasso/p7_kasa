import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    border-radius: 10px;
    height: 350px;
    width: 350px;
    transition: 200ms;
    margin-top: 15px;
    margin-bottom: 15px;
    position: relative;
    &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 20px #e2e3e9;
    }
`
const CardImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    position: absolute;
`

const CardTitle = styled.p`
        z-index: 1;
        position: absolute;
        top: 280px;
        margin-left: 20px;
        text-align: left;
        max-width: 60%;
        color: white;
        font-size: 18px;
`

function Card({ cardData }){
    return (
        <CardWrapper>
            <CardImage src={cardData.cover} alt="Couverture d'annonce" />
            <CardTitle>{cardData.title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}

Card.defaultProps = {
    title: 'Mon titre par défaut',
}

export default Card