import { useEffect, useState } from "react";
import { ReviewCardContainer, BtnLeft, 
    BtnRight, BtnContainer, 
    StyledHeader, MainStyle,
    CommentsList } from "./ReviewCard.styles";
import CommentCard from "../CommentCard/CommentCard";
import Collapsible from 'react-collapsible';
import { nanoid } from 'nanoid';


const ReviewCard = ({id, review}) => {

    const [comments, setComments] = useState([]);
    const localToken = localStorage.getItem("token");
    const displayComments = comments.map(elem => <CommentCard 
                                                    key={nanoid()}
                                                    content={elem.text_content}
                                                    user_pic={elem.commented_by.profile_pic}
                                                    commenter={elem.commented_by.username}
                                                    posted={elem.created}
                                                 />
                                        );

    useEffect(() => {
        const config = {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            })
        };
        fetch(`http://localhost:8001/backend/api/review/comment/read/${id}/`, config).then(response => {
            return response.json();
        }).then(data => setComments(data));
    }, []);

    return (
        <ReviewCardContainer>
            <StyledHeader>
                <img src={`http://localhost:8001${review.creator.profile_pic}`}/>
                <div>
                    <h3>{review.creator.username}</h3>
                </div>
            </StyledHeader>
            <hr/>
            <MainStyle>
                <h3>Restaurant: "{review.restaurant.name}"</h3>
                <p>{review.text_content}</p>
                <button>...full review</button>
            </MainStyle>
            <BtnContainer>
                    <BtnLeft>
                        <button>
                            <img src="/images/icons/like.png"/>
                            <p>Like {review.liked_by.length}</p>
                        </button>
                    </BtnLeft>
                    <BtnRight>
                        <button>
                            <p>Comments {comments.length}</p>
                        </button>
                    </BtnRight>
            </BtnContainer>
            <CommentsList>
                <Collapsible 
                    trigger={comments.length !== 0 ? 
                    "Show/ Hide comments +" : 
                    "There are currently no comments."}>
                    { comments && displayComments }
                </Collapsible>
            </CommentsList>
        </ReviewCardContainer>
    )
}
  
  export default ReviewCard
  