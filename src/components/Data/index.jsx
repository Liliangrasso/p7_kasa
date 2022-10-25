import React,{useState,useEffect} from 'react';
import Card from '../Card/index'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
function DataRecovery() {
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
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <CardsContainer>
      {data.map((myJson) => (
        <Card key={myJson.id} myJson={myJson}/>
      ))}
  </CardsContainer> 
  );
}

export default DataRecovery;