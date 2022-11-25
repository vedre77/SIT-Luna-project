import styled from 'styled-components';

export const LoginContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #F2F2F2;
   height: 100vh;
   color: #4C4C4C;

   h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-weight: light;
      width: 4em;
      border-bottom: 3px solid #E47D31;
      margin-top: 3em;
      margin-bottom: 90px;
      padding: 15px;
   }

   form {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      height: 100%;
   }

   input {
      margin: .5em;
      width: 15em;
      height: .8em;
      padding: 20px;
      font-size: 20px;
      color: grey;
      border: #3b3939;
      border-radius: 25px;
   }

   input:focus {
      border-bottom: 1px solid #837b7b8e;
      box-shadow: 0 1px 0 0 #837b7b8e;
      
   }

   input:focus, input.form-control:focus {
      outline: none;
      outline-width: 0;
   }
`;

export const LoginBtn = styled.div`

   button {
      background-color: #E47D31;
      color: white;
      height: 56px;
      width: 200px;
      font-weight: 400;
      font-size: 16px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 28px;
      margin-top: 60px;
   }

   button:hover {
      background-color: #e47c31d5;;
   }
`;


export const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

