import React, { useState } from 'react';
import './App.css';
import Button from './components/indexx';
import styled from '@emotion/styled';

function App() {
  const companies = [
    {
      codes: [90, 91],
      icon: "https://beeline.uz/favicon.ico",
    },
    {
      codes: [94, 93, 50],
      icon: "https://ucell.uz/img/favicon.ico",
    },
    {
      codes: [33],
      icon: "https://humans.uz/app-icons/favicon-32x32.png",
    },
    {
      codes: [99, 98, 77, 95],
      icon: "https://uztelecom.uz/images/favicon.ico",
    },
  ];

 const Card = styled.div`
 width:100%;
 background-color:white;
 padding:10px;
 display:flex;
 align-items: center;
 justify-content: space-between;
 flex-wrap:wrap;
 gap:20px;

 `


  const [showCards, setShowCards] = useState(false);

  function handleClick() {
    setShowCards(true);
  }

  return (
    <div className="container">
      <Card>
      <Button text='1'/>
          <Button text='2'/>
          <Button text='3'/>
          <Button text='4'/>
          <Button text='5'/>
          <Button text='6'/>
          <Button text='7'/>
          <Button text='8'/>
          <Button text='9'/>
          <Button text='+'/>
          <Button text='0'/>
          <Button text='delete'/>
      </Card>
          

    </div>
  );
}

export default App;