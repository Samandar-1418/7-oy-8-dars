import React, { useState } from 'react';
import './App.css';
import Button from './components/indexx';
import styled from '@emotion/styled';
import Input from './components';
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
    width: 100%;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  `;
  const InputWrapper = styled.div`
  width:100%;
  border:1px solid black;
  border-radius:10px;
  padding:20px;
  display:flex;
  align-items: center;
  justify-content: end;

  `
  const [inputValue, setInputValue] = useState('');
  const [matchedCompany, setMatchedCompany] = useState(null);

  function handleClick(value) {
    const updatedValue = inputValue + value;
  

    if (updatedValue.length >= 2) {
      const foundCompany = companies.find((company) =>
        company.codes.includes(parseInt(updatedValue))
      );
  
      if (foundCompany) {
        setMatchedCompany(foundCompany);
      }
    } else {
      setMatchedCompany(null);
    } 
    
    setInputValue(updatedValue);
  }
  
  function handleChange(e) {
    console.log(e.target.value);
  } 
  function handleClear (){
    setInputValue('');
    setMatchedCompany(null)
  }
  return (
    <div className="container">
      <Card>

        <InputWrapper>
        <img src={matchedCompany && matchedCompany.icon} alt="" />
        <Input value={inputValue} onChange={handleChange}  />

        </InputWrapper>
        <Button text='1' onClick={() => handleClick('1')} />
        <Button text='2' onClick={() => handleClick('2')} />
        <Button text='3' onClick={() => handleClick('3')} />
        <Button text='4' onClick={() => handleClick('4')} />
        <Button text='5' onClick={() => handleClick('5')} />
        <Button text='6' onClick={() => handleClick('6')} />
        <Button text='7' onClick={() => handleClick('7')} />
        <Button text='8' onClick={() => handleClick('8')} />
        <Button text='9' onClick={() => handleClick('9')} />
        <Button text='+' onClick={() => handleClick('+')} />
        <Button text='0' onClick={() => handleClick('0')} />
        <Button text='delete' onClick={handleClear} />
      </Card>
    </div>
  );
}

export default App;
