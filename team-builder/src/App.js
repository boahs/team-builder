import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const testData = [
  //   {
  //     id: 0,
  //     name: "Sha Adkins",
  //     email: "boahs@boahs.info",
  //     role: "software dev",
  //   },
  // ];
  const initialFormValues = {
    name: "",
    email: "",
    role: "",
  };

  const [team, setTeam] = useState(initialFormValues);
  // console.log(team);

  const updateTeam = (inputName, inputValue) => {
    setTeam({ ...team, [inputName]: inputValue });
  };
  console.log();

  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
