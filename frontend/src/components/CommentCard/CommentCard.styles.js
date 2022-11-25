import styled from "styled-components";

export const CommentWrapper = styled.div`

    border: 1px solid lightgray;
    padding: 1em;
    padding-left: 0;
    margin-top: 1em;
    width: 90%;
    margin: 0 auto;
    margin-bottom: .5em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    
    img {
        width: 50px;
        border-radius: 50px;
        margin: 0 .5em;
        object-fit: contain;
    }
`

export const CommenterWrapper = styled.div`
    display: flex;

    .commenter-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .commenter-info p, h4 {
        margin: 0;
        padding: 0;
    }
`

export const Content = styled.p`
    border: 1px solid lightgray;
    padding: 1em;
    align-self: center;
    width: 90%;
    border-radius: 10px;
`