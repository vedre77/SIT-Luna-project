import styled from "styled-components";
import { HeaderInfo, ReviewsList, 
    StyledHeader, UserCardContainer } from "../../components/UserCard/UserCard-styles";
import { SearchBtn } from '../homepage/homepage.styles';

export const ProfilePageContainer = styled(UserCardContainer)`
    border-top: none;
    border: 1px solid lightgray;
    border-radius: 25px;
    margin: 0 auto;
    margin-top: 5em;
    padding-bottom: 5em;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        border-bottom: 5px solid #E47D31;
        padding-bottom: .5em;
        border-radius: 10px;
    }
`

export const ProfilePageHeader = styled(StyledHeader)`
    border: 1px solid lightgray;
    border-radius: 25px;
    width: 75%;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;

    img {
        align-self: center;
        width: 150px;
        margin-bottom: 1em;
    }
`

export const ProfileInfo = styled(HeaderInfo)`

    h3 {
        font-size: 20px;
    }

    p {
        font-size: 15px;
    }
    
`

export const AboutMe = styled.div`
    border: 1px solid lightgray;
    border-radius: 25px;
    margin-top: 2em;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileOptions = styled.div`
    display: flex;
    gap: 1em;
    margin-bottom: 1em;
`

export const ProfileOptionsBtn = styled(SearchBtn)`
      height: 3em;
      width: 10em;
      font-size: .8em;
`

export const ProfileReviewsList = styled(ReviewsList)`
    
`