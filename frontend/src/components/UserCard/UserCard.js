import { MainStyle, StyledHeader, 
    UserCardContainer, Info, 
    HeaderInfo, ReviewsList } from "./UserCard-styles";
import { useState, useEffect } from "react";
import Collapsible from 'react-collapsible';
import ReviewCard from '../ReviewCard/ReviewCard'
import { nanoid } from "nanoid";

const UserCard = ({user}) => {

    const localToken = localStorage.getItem("token");
    const [reviews, setReviews] = useState([]);
    const [comments, setComments] = useState([]);

    // fetch user reviews and comments:
    useEffect(() => {
          const config = {
              method: "GET",
              headers: new Headers ({
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localToken}`
              })
          };
          fetch(`http://localhost:8001/backend/api/reviews/user/${user.id}`, config).then(response => {
              return response.json();  
          }).then(data => setReviews(data));
          fetch(`http://localhost:8001/backend/api/review/comment/${user.id}`, config).then(response => {
              return response.json();  
          }).then(data => setComments(data));
    }, [])

    const displayReviews = reviews.map(elem => <ReviewCard 
                                                    key={nanoid()}
                                                    id={elem.id}
                                                    review={elem}
                                                />
    );

    return (
        <UserCardContainer>
            <StyledHeader>
                <img src={user.profile_pic}/>
                <HeaderInfo>
                    <Info>
                        <p>Username: </p>
                        <h3>{user.username}</h3>
                    </Info>
                    <Info>
                        <p>Name: </p>
                        <h3>{user.first_name}</h3>
                    </Info>
                    <Info>
                        <p>Surname: </p>
                        <h3>{user.last_name}</h3>
                    </Info>
                    <Info>
                        <p>Reviews: </p>
                        <h3>{reviews.length}</h3>
                    </Info>
                    <Info>
                        <p>Comments: </p>
                        <h3>{comments.length}</h3>
                    </Info>
                </ HeaderInfo>
            </StyledHeader>
            <hr/>
            <MainStyle>
                   {user.about_me}
                <button> read more</button>
            </MainStyle>
            <ReviewsList>
                <Collapsible
                    trigger={reviews.length !== 0 ? 
                    "Show/ Hide reviews +" : 
                    "The user has currently no reviews."}>
                    { reviews && displayReviews }
                </Collapsible>
            </ReviewsList>
        </UserCardContainer>
    )
  
  }
  
  export default UserCard
  