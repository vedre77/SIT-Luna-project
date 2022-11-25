import { useState, useEffect } from "react";
import { ReviewCardContainer, StyledHeader, 
    MainStyle, BtnContainer, 
    BtnRight, BtnLeft,
    CommentSection } from "./ReviewFilterCard.styles";
import CommentCard from "../CommentCard/CommentCard";
import Collapsible from 'react-collapsible';
import { nanoid } from "nanoid";

const ReviewFilterCard = ({id, profile_pic, name, created, content, likes}) => {

    const localToken = localStorage.getItem("token");
    const [comments, setComments] = useState([]);

    const displayComments = comments.map(elem => <CommentCard 
                                                    key={nanoid()}
                                                    content={elem.text_content}
                                                    user_pic={elem.commented_by.profile_pic}
                                                    commenter={elem.commented_by.username}
                                                    posted={elem.created}
                                                />
);

    // get comments on review:
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

    const handleLike = () => {
        const config = {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            })
        };
        fetch(`http://localhost:8001/backend/api/reviews/like/${id}/`, config).then(response => {
            return response.json();  
        })
    }

    return (
        <ReviewCardContainer>
            <StyledHeader>
                <img src={`http://localhost:8001${profile_pic}`}/>
                <div className="header-info">
                    <h4>{name}</h4>
                    <p>created: {created.substring(0, 10)}</p>
                </div>
            </StyledHeader>
            <hr/>
            <MainStyle>
                {content} 
            </MainStyle>
            <BtnContainer>
                    <div className="likes-comments">
                        <BtnLeft>
                            <button onClick={handleLike}>
                                <img src="/images/icons/like.png"/>
                                <p>Likes:  {likes}</p>
                            </button>
                        </BtnLeft>
                        <BtnRight>
                            <button>
                                <p>Comments:  {comments.length}</p>
                            </button>
                        </BtnRight>
                    </div>
            </BtnContainer>
            <CommentSection>
                <Collapsible 
                    trigger={comments.length !== 0 ? 
                    "Show/ Hide comments +" : 
                    "There are currently no comments."}>
                    { comments && displayComments }
                </Collapsible>
            </CommentSection>
    </ReviewCardContainer>
    )
}

export default ReviewFilterCard