import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const RootDiv = styled.div`
  /* background-color: green; */
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} 2s infinite linear;
`;

const MyA = styled.a`
  color: aliceblue;
`;

export default function Practice1() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
