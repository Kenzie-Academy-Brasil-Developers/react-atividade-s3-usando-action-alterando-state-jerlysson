import styled from "styled-components";

export const BoxCard = styled.div`
  margin-top: 5em;
  height: 100vh;
  form {
    @media (max-width: 700px) {
      width: 60%;
    }
    background: #e6dbdb;
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 0 auto;
    button {
      background-color: blue;
      color: white;
      font-weight: bold;
    }
  }
`;
