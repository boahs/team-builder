import React from "react";
import styled from "styled-components";

const Border = styled.div`
  color: white;
`;

export default function TeamForm(props) {
  const { values, update, submit } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <Border>
        <div className="form-group submit">
          <header className="App-header">Team Member List</header>
          <h2>Add a Team Member</h2>
          <button
            disabled={
              !values.name || !values.email || !values.role ? true : false
            }
          >
            submit
          </button>
        </div>

        <div className="form-group inputs">
          <h4>general information</h4>

          <label>
            Name:&nbsp;
            <input
              value={values.name}
              onChange={onChange}
              name="name"
              placeholder="type name..."
              maxLength="30"
              type="text"
            />
          </label>

          <label>
            Email:&nbsp;
            <input
              value={values.email}
              onChange={onChange}
              name="email"
              placeholder="type email..."
              maxLength="30"
              type="email"
            />
          </label>

          <label>
            Role:&nbsp;
            <select onChange={onChange} value={values.role} name="role">
              <option value="">--Select a Role--</option>
              <option value="tm">Team Member</option>
              <option value="tl">Team Leader</option>
              <option value="tm">Team Mentor</option>
            </select>
          </label>
        </div>
      </Border>
    </form>
  );
}
