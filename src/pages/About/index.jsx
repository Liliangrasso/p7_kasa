import React from "react";
import Collapse from "../../components/Collapse/index"
import styled from "styled-components";

const CollapseWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
function About(){
    console.log(aboutData)
    return (
        <main>
            <h1>About</h1>
            <CollapseWrapper>
                {aboutData.map((item, i) => (
                    <Collapse key={item.id} title={item.title} description={item.description}/>
                ))}          
            </CollapseWrapper>
        </main>
    )
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

export default About;