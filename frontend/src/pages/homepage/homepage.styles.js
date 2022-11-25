import styled from "styled-components";

export const HomePageWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 4em;
   height: 100%;

`

export const SearchBtn = styled.button`

      background-color: #E47D31;
      color: white;
      height: 3.5em;
      width: 10em;
      font-weight: 400;
      font-size: 1em;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;

      :hover {
         background-color: #e47c31d5;;
      }
`

export const SearchContainer = styled.div`
   width: 100%;
   height: 12em;
   margin: 0 auto;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 1;
   background-image: url("/images/icons/homepage.png");
   background-size: cover;
   background-repeat: no-repeat;

   form {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      z-index: 1;
   }

   input {
      margin: 1em;
      height: .5em;
      width: 15em;
      padding: .8em;
      font-size: 1.3em;
      color: grey;
      border: #3b3939;
      border-radius: 3px;
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

export const FormContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   
   input, button {
      margin-top: 5em;
   }
`;

export const BestRated = styled.div`
   margin-top: 8em;
   margin-left: 1em;
   margin-right: 1em;
   padding-bottom: 10em;
   width: 95%;
   color:#4C4C4C;
   display: flex;
   position: absolute;
   flex-direction: column;
   align-items: center;

   h2 {
      margin: 1em 0;
      padding: 0;
   }

`;

export const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 20%);
   justify-content: center;
   grid-gap: 1.5em;
   width: 100%;

   @media only screen and (max-width: 1120px) {
      grid-template-columns: repeat(3, 25%);
   }

   @media only screen and (max-width: 890px) {
      grid-template-columns: repeat(2, 35%);
   }
`;




