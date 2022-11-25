import styled from "styled-components";

export const RestaurantPageWrapper = styled.div`
    /* position: relative; */
    position: fixed;
    width: 100%;
    z-index: 1;
`;

export const ImageStyle = styled.div`
    img {
        width: 100%;
        height: 20em;
        object-fit: cover;
    }
`;

export const RestaurantDetailsCard = styled.div`
    // google map image , phone, location and web
    font-family: 'Helvetica';
    color:  #4C4C4C;
    background-color: white;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 70%;
    right: 0;
    bottom: 0;
`;

export const RestaurantDetails = styled.div`
    // location, phone and web
    
    div {
        display: flex;
        align-items: center;
        gap: 1em;
        margin-left: 1em;
    }
`;

export const RestaurantSlider = styled.div`
    // restaurant header overlay with info and rating
    /* border: 3px solid red; */
    background-color: rgba(0, 0, 0, 0.4);
    font-family: 'Helvetica';
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    z-index: 1;
    top: 2em;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: .8em;

    p {
        font-weight: 300;
        font-size: 24px;
    }
`;

export const RatingSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

