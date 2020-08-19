import React from "react";
import styled from "styled-components";

// const rand = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
// console.log(rand); // couldn't get it to loop with new entires oh well

const StyledDiv = styled.div`
  border-style: outset;
  border-width: 6px;
  border-color: #355c7d;
  background: #474747;
  color: white;
`;

export default function TeamMembers(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working on obtaining your Team members&apos;s details...</h3>;
  }

  return (
    <div className="Team Members container">
      <StyledDiv>
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </StyledDiv>
    </div>
  );
}
