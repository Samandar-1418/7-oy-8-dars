import React from 'react'

import styled from '@emotion/styled';
const Buttons = styled.button`
padding:10px 20px ;
color:black;
font-siz

e:24px;
border:1px solid lithgrey;
background-color: rgb(232, 235, 238);
border-radius:10px;
width:30%;
&:hover{
  background-color: lightgray;


}
`
export default function Button({text}) {
   return (

    <Buttons>{text}</Buttons>
  )
}
