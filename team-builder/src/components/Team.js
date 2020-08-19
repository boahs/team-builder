import React from "react";
import styled from "styled-components";

const rand = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
console.log(rand);

const StyledDiv = styled.div`
  border: 3px solid ${rand};
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
