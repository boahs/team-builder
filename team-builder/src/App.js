import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Team from "./components/Team";
import TeamForm from "./components/TeamForm";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  // const testData = [
  //   {
  //     id: 0,
  //     name: "Sha Adkins",
  //     email: "boahs@boahs.info",
  //     role: "software dev",
  //   },
  // ];

  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  // console.log(team);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  console.log(formValues);

  const submitForm = () => {
    const team = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!team.username || !team.email) return;
  };

  return (
    <div className="App">
      <header className="App-header">
        <TeamForm values={formValues} update={updateForm} submit={submitForm} />
        {team.map((team) => {
          return <Team key={team.id} details={team} />;
        })}
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
