import { Info } from "../../components/UserCard/UserCard-styles";
import { ProfileInfo, ProfilePageContainer, 
  ProfilePageHeader, AboutMe,
ProfileReviewsList, ProfileOptions,
ProfileOptionsBtn } from "./ProfilePage.styles";
import { useState, useEffect } from "react";
import Collapsible from 'react-collapsible';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { nanoid } from "nanoid";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProfilePage = () => {

  const localToken = localStorage.getItem("token");
  const [user, setUser] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);
  
  // fetch user:
  useEffect(() => {
    const config = {
        method: "GET",
        headers: new Headers ({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localToken}`
        })
    };
    fetch(`http://localhost:8001/backend/api/me/`, config).then(response => {
        return response.json();  
    }).then(data => setUser(data));
}, []);


  // fetch user reviews and comments:
  useEffect(() => {
    if (user.length === 0) return;
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
  }, [user])

  const displayReviews = reviews.map(elem => <ReviewCard 
                                                  key={nanoid()}
                                                  id={elem.id}
                                                  review={elem}
                                              />
  );

  return (
      <>
      <Header />
      <ProfilePageContainer>
          <h2>Hi, {`${user.first_name} ${user.last_name}!`}</h2>
          <ProfileOptions>
            <ProfileOptionsBtn>EDIT PROFILE</ProfileOptionsBtn>
            <ProfileOptionsBtn>EDIT/ DELETE REVIEW</ProfileOptionsBtn>
            <ProfileOptionsBtn>EDIT/ DELETE COMMENTS</ProfileOptionsBtn>
          </ProfileOptions>
          <ProfilePageHeader>
              <img src={user.profile_pic}/>
              <ProfileInfo>
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
              </ ProfileInfo>
          </ProfilePageHeader>
          <AboutMe>
                <h3>About me:</h3>
                <p>{user.about_me}</p>
          </AboutMe>
          <ProfileReviewsList>
              <Collapsible
                  trigger={reviews.length !== 0 ? 
                  "Show/ Hide reviews +" : 
                  "The user has currently no reviews."}>
                  { reviews && displayReviews }
              </Collapsible>
          </ProfileReviewsList>
      </ProfilePageContainer>
      <Footer />
    </>
  )

}

export default ProfilePage
