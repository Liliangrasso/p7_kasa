import React from "react";
import styled from 'styled-components'
import { useState } from "react";

import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import '../../styles/Slider/styles.css'

//Slides styles
const SlidesContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
`

const SlidesImg = styled.img`
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    background-position: center;
    object-fit: cover;
    border-radius: 25px;
`
// Navigation styles
const ArrowLeft = styled.div`
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translate(0, -50%);
    color: white;
    font-size: 25px;
    z-index: 1;
    cursor: pointer;
`
const ArrowRight = styled.div`
    position: absolute;
    top: 50%;
    right: 32px;
    transform: translate(0, -50%);
    color: white;
    font-size: 25px;
    z-index: 1;
    cursor: pointer;
`
//Counter styles

const CounterContainer = styled.div`
    position: relative;
    bottom: 50px;
    font-size: 18px;
    color: white;
`
function Slider ({slides}){
    const [currentIndex, setCurrentIndex] = useState(0);
    // Navigation
    const back = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const next = () => {
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    // Compteur
    const counter = currentIndex + 1;
    const counterLength = slides.length;

    return(
        <SlidesContainer>
            {counterLength > 1 &&(
                <ArrowLeft onClick={back}><FaChevronLeft /></ArrowLeft>
            )}
            {counterLength > 1 &&(
                <ArrowRight onClick={next}><FaChevronRight /></ArrowRight>
            )}
			{slides.map((slide, index) => (
				<div
					key={index}
					className={currentIndex === index ? "slideWrapper" : null}
				>
					{index === currentIndex && <SlidesImg src={slide} alt="Location illustraation(s)" />}
					{index === currentIndex && (
						<CounterContainer className="active-anim">
                            {counter}/{counterLength}
                        </CounterContainer>
					)}
				</div>
                
			))}
        </SlidesContainer>
    )
}

export default Slider;

/*

                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex}>
                        {counter}
                        {counterLength}
                    </div>
                ))}


                // Solution
                 <Slides style={{backgroundImage : `url(${slides[currentIndex].url})`}} />
            <CounterContainer>
                {counter}/
                {counterLength}
            </CounterContainer>

*/