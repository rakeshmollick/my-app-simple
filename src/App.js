import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
 
function App() {
const [nayoks, setNayoks] = useState([])
console.log(count)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  return (
    <div className="App">
      <MovieCounter>
        {
          nayoks.map(nk => <Nayok name = {nk.name} age = {nk.age}></Nayok>)
        }
      </MovieCounter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Scratch
        </a>
      </header>
    </div>
  );
}
 
export default App;