import React, { useState } from 'react';
import './style.css';
import {createStore} from 'redux';
import { Provider,useSelector,useDispatch,connect } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';

function reducer(currentState,action){
  if(currentState==undefined){
    return {number: 1,};
  }
  const newState={...currentState};
  if(action.type=='PLUS'){newState.number++;}
  return newState;
}

const store=createStore(reducer);

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
        
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  function f(state){
    return state.number;
  }

  const number=useSelector((state)=>state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  const dispath=useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {
        dispath({type:'PLUS'});
      }}></input>
    </div>
  );
}
