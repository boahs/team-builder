import React from "react";
import styled, { keyframes } from "styled-components";

// const rand = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
// console.log(rand); // couldn't get it to loop with new entires oh well

// injectGlobal`
// @font-face {
//   font-family: "Open Sans Condensed";
//   src: url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
// }
// `;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 4s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  font-size: 1.2rem;
`;

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
        <Rotate>
          <span role="img" aria-label="Soccerball">
            ⚽
          </span>
          <span role="img" aria-label="Programmer">
            👨‍💻
          </span>
          <span role="img" aria-label="Laptop Computer">
            💻
          </span>
        </Rotate>

        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </StyledDiv>
    </div>
  );
}
