import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
// import Register from "./components/Register";
import Hero from "./components/Hero";

function App() {
  // const [state, setState] = useState(true);
  const [login, setLogin] = useState(true);

  return (
    <>
      {login ? <Hero setLogin={setLogin} /> : <Login />}
      {/* {state ? <Login setState={setState} /> : <Register setState={setState} />} */}
    </>
  );
}

export default App;
