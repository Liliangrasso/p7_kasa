import React,{useState,useEffect} from 'react';
import Card from '../Card/index'
import styled from 'styled-components'


const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:20px;
  @media (min-width: 992px){
    background-color: #F6F6F6;
    border-radius: 25px 25px 0px 25px;
    max-width: 75%;
}
`

function DataDisplay() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(cardData) {
        console.log(cardData);
        setData(cardData)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <CardsContainer>
      {data.map((cardData) => (
        <Card key={cardData.id} cardData={cardData}/>
      ))}
  </CardsContainer> 
  )
}

export default DataDisplay;