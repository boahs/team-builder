import React from "react";

const TeamForm = (props) => {
  const { values, update, submit } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    update(name, value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <button
          disabled={
            !values.username || !values.email || !values.role ? true : false
          }
        >
          submit
        </button>
      </div>
      <div className="form-group inputs">
        <h4>General information</h4>

        <label>
          Username:&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            placeholder="type username"
            maxLength="20"
            type="text"
          />
        </label>

        <label>
          Email:&nbsp;
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="type email"
            maxLength="30"
            type="email"
          />
        </label>

        <label>
          Role:&nbsp;
          <select onChange={onChange} value={values.role} name="role">
            <option value="">-- Select a Role --</option>
            <option value="student">Student</option>
            <option value="tl">Team Lead</option>
            <option value="alumni">Alumni</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default TeamForm;
