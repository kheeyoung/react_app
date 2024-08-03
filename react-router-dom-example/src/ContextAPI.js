import React, { createContext, useContext } from 'react';
import './style.css';
const themeDefalut={border: '10px solid red'};
const themeContext =createContext(themeDefalut);

export default function App() {
  const theme=useContext(themeContext);
  return (
    <themeContext.Provider value={{border: '10px solid yellow'}}>  
    <div className='root' style={theme}>
      <h1>Hello World</h1>
      <Sub1/>
    </div>
    </themeContext.Provider>
  );
}

function Sub1(){
  const theme=useContext(themeContext);
  //useContext는 부모중 가장 먼저 만난 프로바이더의 value 값을 리턴 값으로 사용.
  return(
    <themeContext.Provider value={{border: '10px solid green'}}>  
    
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2/>
      </div>
    </themeContext.Provider>
    
  );
}
function Sub2(){
  const theme=useContext(themeContext);
  return(
    <div style={theme}>
    <h1>Sub2</h1>
    <Sub3/>
    </div>
  );
}
function Sub3(){
  const theme=useContext(themeContext);
  return(
    <div style={theme}>
    <h1>Sub3</h1>
    </div>
  );
}

