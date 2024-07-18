import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Hero from "./components/Hero";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <>
      {login ? <Hero setLogin={setLogin} /> : <Login />}
    </>
  );
}

export default App;
