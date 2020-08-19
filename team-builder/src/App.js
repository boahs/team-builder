import React, { useState, useEffect } from "react";
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";
import { v4 as uuid } from "uuid";

import "./App.css";

const initialData = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: "Sha",
    email: "boahs@boahs.info",
    role: "team member",
  },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

const fakeAxiosGet = () => {
  return Promise.resolve({
    status: 200,
    success: true,
    data: initialData,
  });
};
const fakeAxiosPost = (url, { name, email, role }) => {
  const newTeamMember = { id: uuid(), name, email, role };
  return Promise.resolve({ status: 200, success: true, data: newTeamMember });
};

function App() {
  const [teamMembersList, setTeamMembersList] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const teamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!teamMember.name || !teamMember.email) return;

    fakeAxiosPost("fake.com", teamMember)
      .then((res) => {
        setTeamMembersList([...teamMembersList, res.data]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  useEffect(() => {
    fakeAxiosGet("fakeapi.com").then((res) => setTeamMembersList(res.data));
  }, []);

  return (
    <div className="App">
      <TeamForm values={formValues} update={updateForm} submit={submitForm} />

      {teamMembersList.map((teamMember) => {
        return <Team key={teamMember.id} details={teamMember} />;
      })}
    </div>
  );
}

export default App;
