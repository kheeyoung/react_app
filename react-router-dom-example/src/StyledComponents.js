import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';


const SimpleButton = styled.button`
  color:white;
  background-color:green;
`;

const LargeButton=styled(SimpleButton)`
  font-size:50px;
`;

const ReactButton=props=>{
  return <button className={props.className}>{props.children}</button>
}
const ReactLargeButton=styled(ReactButton)`
  font-size:50px;
`;

const PrimaryButton=styled.button`
color:${function(props){
  if(props.primary){return 'white';}
  return 'blue';
}}`;

function App(){
  return(
    <div>
      <div><SimpleButton>Simple</SimpleButton></div>
      <div><LargeButton>Large</LargeButton></div>
      <div><ReactButton>React</ReactButton></div>
      <div><ReactLargeButton>ReactLarge</ReactLargeButton></div>
      <div><PrimaryButton>Normal</PrimaryButton></div>
      <div><PrimaryButton primary>Primary</PrimaryButton></div>
    </div>
    
  )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
