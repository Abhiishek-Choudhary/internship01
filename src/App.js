// import { useState } from 'react';
import './App.css';
// import Login from './components/Login';
// import Register from './components/Register';
import Hero from './components/Hero';

function App() {

  // const[state, setState] = useState(true)

  return (
    <>
     {/* {
        state ? <Login setState={setState}/> : <Register setState={setState}/>
     } */}
     <Hero />
    </>
  );
}

export default App;
