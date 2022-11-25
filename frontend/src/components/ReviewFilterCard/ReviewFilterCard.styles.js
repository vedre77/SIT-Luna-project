import styled from "styled-components";

export const ReviewCardContainer = styled.div`
    background-color: white;
    padding: 1em;
    border: 1px solid #EBEBEB;
    border-radius: 10px;
    margin-bottom: 1em;

    h3, h4 {
    color: #E47D31;
    }

    p {
    
        font-size: 14px;
    }

    hr {
        margin-left:-10px;
        margin-right: -10px;
        position: relative;
        margin-bottom: 10px;
        height: 1px;
        background-color: #cccccc4d;
        border: none;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0 -.2em 0;

    .likes-comments {
        display: flex;
    }

    button {
        background-color: rgba(145, 145, 145, 0.6);
        color: white;
        height: 25px;
        width: 130px;
        font-weight: 400;
        font-size: 16px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 18px;
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

export const StyledP = styled.div`
    font-family: 'Helvetica';
    padding-bottom: 11px;
    font-size: 20px;
    font-weight: 300;
`;

export const StyledHeader = styled.div`
    display: flex;
    align-items: flex-end;
    height: 60px;
    margin-left: -11px;

    img {
        width: 50px;
        border-radius: 50px;
        margin: 0 .5em;
    }

    .header-info {
        
        display: flex;
        flex-direction: column;

        h4, p {
            margin: 0;
            padding: 0;
        }
    }
`;

export const MainStyle = styled.div`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;

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

export const CommentSection = styled.div`

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


