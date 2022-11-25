import styled from "styled-components";

export const UserCardContainer = styled.div`
    background-color: white;
    padding: 11px;
    border-top: #E47D31 8px solid;
    border-color: #EBEBEB 1px solid;
    border-radius: 3px;

    h3 {
        color: #E47D31;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .5em;
    margin-left: 1em;

    p, h3 {
        margin: 0;
        padding: 0;
        line-height: 1.5em;
    }

    p {
        font-weight: bold;
        font-size: 14px;
        width: 6em;
    }
`

export const HeaderInfo = styled.div`
    
`

export const ReviewsList = styled.div`

    span {
        display: block;
        padding: 0.5em;
    }

    margin: 1em 0;
    color: orange;
    border: 1px solid orange;
    border-radius: 20px;
    font-style: oblique;

    p {
        color: gray;
    }
`

export const StyledHeader = styled.div`
    display: flex;

    img {
        width: 80px;
        border-radius: 50px;
        margin: 0 .5em;
        object-fit: contain;
        align-self: flex-start;
    }

    p {
        color: #4C4C4C;
    }
`;


export const MainStyle = styled.div`

    font-size: 14px;
    border: 1px solid lightgray;
    padding: .5em;

    button {
        background-color: white;
        border: none;
        color: #E47D31;
        font-weight: 700;
    }
`;

