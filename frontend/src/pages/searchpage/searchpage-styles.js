import styled from "styled-components";

export const ButtonContainer = styled.div`
  
  padding-top: 19px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
      background-color: #F2F2F2;
      border: none;
      margin: 0 15px;
      font-weight: 700;
      font-size: 20px;
      color:  #4C4C4C;
      min-width: 10em;
      padding-bottom: 17px;
      border: 3px solid transparent;
  }

  button:focus, button:active {
    border-bottom: 4px solid #E47D31; 
  }
`;

export const MainStyle = styled.div`
  background-color: #F2F2F2;
`;

export const Grid = styled.div`
  margin: 1em auto;
  padding-bottom: 5em;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
`;




