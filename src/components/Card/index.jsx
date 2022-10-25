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
    background-color: #F6F6F6;
    margin-right: 30px;
    margin-left: 30px;
    border-radius: 25px 25px 0px 25px;
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

const Title = styled.p`
        z-index: 1;
        position: absolute;
        top: 280px;
        margin-left: 20px;
        text-align: left;
        max-width: 60%;
        color: white;
        font-size: 18px;
`

function Card({ myJson }){
    return (
        <CardWrapper>
            <CardImage src={myJson.cover} alt="Couverture d'annonce" />
            <Title>{myJson.title}</Title>
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