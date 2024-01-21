import React from 'react'
import styled from '@emotion/styled';
const InputStyle = styled.input`
padding:10px;
outline: none;
border:none;
width:80%;
font-size:20px;
`
export default function Input({ value, onChange }) {
    return <InputStyle type="text"  value={value} onChange={onChange} />;
  }