import styled from "styled-components";
import { SearchBtn } from "../../pages/homepage/homepage.styles";

export const RestaurantCardContainer = styled.div`
  border: 1px solid lightgray;
  padding: .5em;
  max-width: 18em;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top: #E47D31 8px solid;
  border-color: #EBEBEB 1px solid;
  border-radius: 15px;

  .restaurant-image {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: 6em;
      object-fit: cover;
      border-radius: 7px;
      
  }

  h3 {
    margin: .5em 0 0 0;
    padding: 0;
  }
`;

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 .5em;
    gap: .5em;
    margin-bottom: 1em;

    p {
      font-size: 1em;
      margin: 0;
      padding: 0;
    }

    p:first-of-type {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: 400;
      font-size: 1em;
      color: #4C4C4C;
      margin: .2em 0;
    }
    
`;

export const SeeRestaurantBtn = styled(SearchBtn)`
  margin: 1em auto;
  padding: .1em;
  height: 2em;
  width: 10em;
  border-radius: 20px;

`

export const Stars = styled.div`

`;


export const ImgWrapper = styled.div`
    
`;
