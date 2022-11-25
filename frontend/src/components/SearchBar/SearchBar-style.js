import styled from "styled-components";

export const SearchBarStyle = styled.div`

 select {
    width: 20%;
    border-left: none;
    margin: .5em 0 .5em 1em;
}

 input {
    width: 80%;
}

#userSearch {
    margin: 4em 0 .5em 1em;
    width: fit-content;
    height: 2em;
    border: 1px solid #D8D8D8;
    border-radius: 25px;
}

input, select {
    height: 50px;
    color: #808080b1;
    border-bottom: 1px solid #D8D8D8;
    border-left: none;
    border-top: none;
    border-right: 1px solid #D8D8D8;
    font-size: 20px;
    border-radius: 3px;
    padding-left: 20px;
 } 

input:focus, select:focus {
    outline: none;
}
`;
