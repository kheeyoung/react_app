import React, { useReducer,useState } from 'react';
//useReducer는 직접 set함수로 값을 변경하는 useState와 달리 함수만 호출하고, 그 함수가 값을 바꾼다.
import './style.css';

export default function App() {
  const [number,setNumber]=useState(1);

  function countReducer(oldCount, action){
    if(action.type=='UP'){
      return oldCount+action.number;
    }
    else if(action.type=='DOWN'){
      return oldCount-action.number;
    }
    else if(action.type=='RESET'){
      return 0;
    }
  }  
  
  const [count,countDispath]=useReducer(countReducer,0);

  function down(){
    countDispath({type:'DOWN',number:number});
  }
  function up(){
    countDispath({type:'UP',number:number});
  }
  
  function reset(){
    countDispath({type:'RESET',number:number});
  }

  function changeNum(event){
    setNumber(Number(event.target.value));
  }

  return (
    <div>
      <input type='button' value="-" onClick={down}/>
      <input type='button' value="0" onClick={reset}/>
      <input type='button' value="+" onClick={up}/>
      <input type='text' value={number} onChange={changeNum}/>
      <span>{count}</span>
    </div>
  );
}
