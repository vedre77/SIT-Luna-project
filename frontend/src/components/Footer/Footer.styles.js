import styled from 'styled-components';


export const FooterWrap = styled.div`
  border: 1px solid lightgray;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;

  ul {
   margin: 0;
   padding: 0;
  }
`;


export const FooterContainer = styled.div`
   padding-top: .2em;
   display: flex;
   justify-content: space-between;
   align-items: center;

   ul {
      text-decoration: none;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

export const FooterLinks = styled.div`
   margin: 0;
   padding: 0;
   
   ul > li {
      margin-right: 75px;
      color: #646363;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 15px;
      margin-left: 30px;
   }

   ul > li:hover {
      cursor: pointer;
      transform: scale(1.1);
   }
`;

export const FooterIcons = styled.div`
   // social icons
   li img {
      width: 30px;
   }

   ul > li {
      margin-left: 30px;
   }

   ul > li:hover {
      cursor: pointer;
      transform: scale(1.1);
      color: #837e7e13;
   }

   ul > li:last-child {
      margin-right: 30px;
   }
`;

export const Copyright = styled.h6`
    font-size: 12px;
    color: #646363;
    margin: 0;
    padding: 0 0 0.5em 0;
    padding-left: 1em;
    background-color: white;
`;

export const Line = styled.hr`
     height: 1px;
     background-color: #cccccc4d;
     border: none;
     margin-top: 0;
`;







