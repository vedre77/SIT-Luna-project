import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    border-bottom: 2px solid lightgrey;
`;

export const LinkContainer = styled.div`
    /* border: 3px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.div`
    border: none;
    background-color: white;

    p {
        margin: 0;
        padding: 0;

        @media only screen and (max-width: 1000px) {
            font-size: .8em;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        padding: .5em 2em;
        color: #4A4A4A;
        background-color: transparent;
        border: 3px solid transparent;

        :hover {
            cursor: pointer;
            font-weight: 700;
            border-bottom: 3px solid orange;
        }
    }
`;

export const Logo = styled.div`

    margin: .5em 0 .5em 2em;
    border-bottom: 2px solid orange;
    padding: .5em;
    border-radius: 20px;

    img {
        display: block;
        max-width: 100%;
        min-width: 80px;
    }
`;

export const HeaderBtn = styled.div`

    button {
        background-color: #E47D31;
        color: white;
        height: 40px;
        width: 100px;
        font-weight: 400;
        font-size: 16px;
        cursor: pointer;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
            background-color: #e47c31d5;;
        }
    }
`;

export const BtnLeft = styled.div`
button {
 border-right: solid white 1px;
 border-bottom-left-radius: 28px;
 border-top-left-radius: 28px;
 margin-left:62px;
}
`;

export const BtnRight = styled.div`
button {
 border-left: solid white 1px;
 border-bottom-right-radius: 28px;
 border-top-right-radius: 28px;
 margin-right:30px;
}
`;




