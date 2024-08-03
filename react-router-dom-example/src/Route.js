import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes, Link, NavLink, useParams} from 'react-router-dom';
import styled from 'styled-components';

//hash 라우터 : # 이후 문자는 북마크로, js만 읽고 서버는 안 읽음=> 어떤 패스로 들어와도 루트페이지로 서비스 (오류 절감)
//NavLink hash 라우터에서 사용자가 현재 있는 것도 알려주는 기능 추가 (있는 곳이 액티브 됨)
//useParams 라우터에서 path가 가져오는 값 가져오기

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents=[
  {id:1, title:'HTML', des:'HTML is...'},
  {id:2, title:'JS', des:'JS is...'},
  {id:3, title:'REACT', des:'REACT is...'}
]

function Topic() {
  var params=useParams();
  var topics_id=params.topics_id;
  var selected_topic={
    title:'Sorry',
    des:'Not Found'
  };

  for(var i=0; i<contents.length; i++){
    if(contents[i].id==Number(topics_id)){
      selected_topic=contents[i];
      break;
    }
  }
  
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.des}
    </div>
  );
}

function Topics() {
  var list =[];
  for(var i=0; i<contents.length; i++){
    list.push(<li key={i}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>);
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Routes>
        <Route path="/:topics_id" element={<Topic />}/>
      </Routes>
      
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

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
      <h1>Hello Router</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/topics/*' element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/*' element={'Not Found'}/>
      </Routes>

      <div><SimpleButton>Simple</SimpleButton></div>
      <div><LargeButton>Large</LargeButton></div>
      <div><ReactButton>React</ReactButton></div>
      <div><ReactLargeButton>ReactLarge</ReactLargeButton></div>
      <div><PrimaryButton>Normal</PrimaryButton></div>
      <div><PrimaryButton primary>Primary</PrimaryButton></div>
    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
