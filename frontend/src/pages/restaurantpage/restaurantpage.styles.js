import styled from "styled-components";

export const ReviewSection = styled.section`
    // whole review section:
    height: fit-content;
    padding-top: 20em;
    padding-bottom: 5em;
    display: flex;
    justify-content: center;
    background-color: #F8F8F8;
`

export const FilterSection = styled.div`
    // left window:
    width: 50%;
    padding: .5em;

    h3 {
        color: #E47D31;
        border: 2px solid #E47D31;
        border-radius: 15px;
        padding: 1em;
        text-align: center;
    }
`

export const WriteReviewSection = styled.div`
    // right window:
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    background-color: #F5F5F5;

    button {
        background-color: #E47D31;
        color: white;
        font-family: 'Helvetica';
        height: 39px;
        width: 200px;
        font-weight: 400;
        font-size: 16px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
        margin-left: 20px;
    }

    hr {
        margin: 13px 0;
    }

    img {
        margin-right: 25px;
    }

    div:nth-of-type(3) {
        margin-top: 30px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    padding: 1em;

    button {
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
        margin-left: 20px;
    }
`

export const FilterReviewInput = styled.input`
    border: 5px solid black;
    margin: 0;
    padding: 0;
    background-color: lightgray;
    width: 15em;
    height: .5em;
    padding: 1em;
    font-size: 16px;
    color: grey;
    border: 1px solid #EBEBEB;
    border-radius: 20px;
`
