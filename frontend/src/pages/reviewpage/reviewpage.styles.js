import styled from "styled-components";

export const ReviewInput = styled.div`
    padding-top: 7.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#F2F2F2; 
    height: 100vh;

    img {
        filter: opacity(30%);
    }

    h2 {
        color: #E47D31;
        margin: 1em 0 .5em 0;
        padding: 0;
    }

    p {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #7E7E7E;
    }

    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    textarea {
        width: 50em;
        height: 5.5em;
        padding: 20px;
        font-size: 16px;
        color: #BBB7B7;
        border: 1px solid #EBEBEB;
        border-radius: 3px;
    }

    form  > button {
        background-color: #E47D31;
        color: white;
        font-family: 'Helvetica';
        height: 40px;
        width: 120px;
        font-weight: 400;
        font-size: 16px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
        margin-top: 1em;
    }
`

export const StarRatingDiv = styled.div`
    margin-bottom: 1em;
    margin-top: 0;
`
