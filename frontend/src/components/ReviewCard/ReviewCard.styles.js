import styled from "styled-components";



export const ReviewCardContainer = styled.div`
    background-color: white;
    padding: 1em;
    max-width: 18em;
    border-top: #E47D31 8px solid;
    border-color: #EBEBEB 1px solid;
    border-radius: 10px;

    h3, h4 {
        color: #E47D31;
    }

    p {
        color: black;
        border: 1px solid lightgray;
        padding: 1em;
    }

    p:last-child {
        font-size: 14px;
        border: none;
        color: white;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 17px;

    button {
        background-color: rgba(145, 145, 145, 0.6);
        color: white;
        height: 2em;
        width: 8em;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover {
        background-color: rgba(145, 145, 145, 0.395) ;
    }
`;

export const BtnLeft = styled.div`

    button {
        border-right: solid white 1px;
        border-bottom-left-radius: 28px;
        border-top-left-radius: 28px;
    }

    p {
        margin-left: 10px;
        margin-right: 5px;
    }
`;

export const BtnRight = styled.div`

    button {
        border-left: solid white 1px;
        border-bottom-right-radius: 28px;
        border-top-right-radius: 28px;
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    height: 60px;
    margin-left: -11px;

    img {
        margin: 0 1em;
    }

    p {
        color: #4C4C4C;
        font-size: 14px;
        font-weight: 700;
        margin-top: 5px;
    }
`;

export const MainStyle = styled.div`
    font-size: 14px;
    h3 {
        padding-bottom: 10px;
    }

    button {
        background-color: white;
        border: none;
        color: #E47D31;
        font-weight: 700;
    }
`;

export const CommentsList = styled.div`

    span {
        display: block;
        padding: 0.5em;
    }

    margin: 1em 0;
    color: orange;
    border: 1px solid orange;
    border-radius: 20px;
    font-style: oblique;
`


