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

const stamp = keyframes`
0%{
    opacity: 0;
  }
  10%{
    opacity:.50;
    transform-origin: 50% 50%;
    transform: rotate(-2deg) scale(5);
    transition: all .3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
  100%{
    opacity:1;
    transform: rotate(-15deg) scale(1);
  }
`;

const Stamp = styled.div`
  height: 75px;
  width: 100px;
  left: 380px;
  top: 110px;
  border-radius: 5px;
  position: relative;
  background-color: #ef8080;
  -webkit-animation-name: ${stamp};
  animation-name: ${stamp};
  animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  opacity: 0;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
`;

const randomBank = [
  "TEAM!",
  "team!!!",
  "group!",
  "squad!!",
  "bunch!",
  "company!",
  "party!",
  "gang!",
  "crew!!",
];
const randomMessage = randomBank[Math.floor(Math.random() * randomBank.length)];
// console.log(randomMessage);

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
  animation: ${rotate} 2s linear infinite;
  font-size: 1.5rem;
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
        <Stamp>welcome to the {randomMessage}</Stamp>
        <p>
          <Rotate>
            {" "}
            <span role="img" aria-label="Programmer">
              👨‍💻
            </span>
          </Rotate>
          Name: {details.name}
        </p>
        <p>
          <Rotate>
            {" "}
            <span role="img" aria-label="Celebrating Face">
              🥳
            </span>
          </Rotate>
          Email: {details.email}
        </p>
        <p>
          <Rotate>
            {" "}
            <span role="img" aria-label="Laptop computer ">
              💻
            </span>
          </Rotate>
          Role: {details.role}
        </p>
      </StyledDiv>
    </div>
  );
}
