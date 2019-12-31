import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [message,setMessage] = useState('');
  const getData = async function(){
    let json = await fetch('/api/connect').then( resp => resp.json() );
    setMessage( json.message );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to 2020!
        </p>
        <p>{message}</p>
        <button onClick={getData}>GET API</button>
      </header>
    </div>
  );
}

export default App;
