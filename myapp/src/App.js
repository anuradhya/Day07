//import logo from './logo.svg';
import './App.css';
import Childcom from './Childcom';
import {useState} from 'react';

function App() {
  const [childname,setChildname]=useState("Default");
  const recieveName=(name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm parent</h2>
      <Childcom setfun={recieveName}/>
      <p>Parent: My child said:{childname}</p>
    </div>
  );
}

export default App;
