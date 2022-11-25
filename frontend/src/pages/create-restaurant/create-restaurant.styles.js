import styled from "styled-components";


export const CreatePage = styled.div`
    background-color: #F2F2F2;
    padding: 2em .5em;

    h2 {
        display: flex;
        justify-content: center;
        padding-top: 30px;
        font-size: 24px;
        color:#4C4C4C;
    }
`;

export const FormWrapper = styled.div`
    margin-top: 30px;
    font-size: 20px;
    color:#979797;
    display: flex;
    justify-content: center;


    form {
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr; 
        gap: 30px;
    }

    label, input {
        display:flex;
        gap: .2em;
        flex-direction:column;
        justify-content: space-between;
        height: 3.3em;
        position: relative;
    }

    #select {
        margin-top: .8em;
        padding-top: .5em;
    }

    input::file-selector-button {
        background-color: #E47D31;
        color: white;
        padding: .5em;
        font-size: 1em;
        border: none;
        border-radius: 30px;

      :hover {
         background-color: #e47c31d5;;
      }
    }

    input, select {
        height: 50px;
        color: #808080b1;
        border: #342e2e;
        font-size: 20px;
        border-radius: 3px;
        padding-left: 20px;
    }

    input:focus, select:focus {
        outline: none;
        border-bottom: 1px solid #837b7b8e;
        box-shadow: 0 1px 0 0 #837b7b8e;
    }
`;

export const SearchBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        background-color: #E47D31;
        color: white;
        height: 56px;
        width: 200px;
        font-weight: 400;
        font-size: 16px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 28px;
    }
    button:hover {
        background-color: #e47c31d5;;
    }
`;