import React,{useState,useEffect} from 'react';
import Card from '../Card/index'
import styled from 'styled-components'


const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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