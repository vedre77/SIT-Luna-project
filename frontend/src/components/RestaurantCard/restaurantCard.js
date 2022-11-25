import { useNavigate } from "react-router-dom";
import { StyledHeader, RestaurantCardContainer, 
    ImgWrapper, SeeRestaurantBtn} from "./RestaurantCard.styles";
import StarRatings from "react-star-ratings";
import { useState, useEffect } from "react";

const RestaurantCard = (props) => {

    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const localToken = localStorage.getItem("token");

    // GET reviews for current restaurant:
    useEffect(() => {
        const config = {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            })
        };
        fetch(`http://localhost:8001/backend/api/reviews/restaurant/${props.restaurant.id}`, config).then(response => {
            return response.json();
        }).then(data => {
            setReviewCount(data.length);
            const totalScore = data.reduce((acc, curr) => acc + curr.rating, 0);
            const average = data.length === 0 ? totalScore : totalScore / data.length;
            setRating(average);
        });
    }, []);

    return (
        <RestaurantCardContainer>
            <StyledHeader>
                <h3>{props.restaurant.name}</h3>
                <p>{props.restaurant.street}</p>
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    // activate if collecting rating:
                    // changeRating={setRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="1.2em"
                    starSpacing=".2em"
                />
                <p>reviews: {reviewCount}</p>
            </StyledHeader>
            <ImgWrapper>
            <img src={props.restaurant.image} className="restaurant-image"/>       
            </ImgWrapper>
            <SeeRestaurantBtn id={props.restaurant.id} 
                                onClick={e => navigate(`restaurant/${e.target.id}`)}
            >See Restaurant</SeeRestaurantBtn>
        </RestaurantCardContainer>
    )
}
  
export default RestaurantCard



