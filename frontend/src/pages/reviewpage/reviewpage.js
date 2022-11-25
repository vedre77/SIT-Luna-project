import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ReviewInput, StarRatingDiv } from "./reviewpage.styles";
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

const ReviewPage = () => {

    const [restaurantData, setRestaurantData] = useState('');
    const { id } = useParams();
    const localToken = localStorage.getItem("token");
    const [ratingDisplay, setRatingDisplay] = useState(0);
    const [rating, setRating] = useState(0);
    const [reviewContent, setReviewContent] = useState('');
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const [created, setCreated] = useState(false);

    useEffect(() => {
        const config = {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            })
        };
        fetch(`http://localhost:8001/backend/api/restaurants/${id}`, config)
        .then(response => response.json())
        .then(data => setRestaurantData(data));
    }, []);

    // GET reviews and rating for current restaurant:
    useEffect(() => {
        const config = {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            })
        };
        fetch(`http://localhost:8001/backend/api/reviews/restaurant/${id}/`, config).then(response => {
            return response.json();
        }).then(data => {
            const totalScore = data.reduce((acc, curr) => acc + curr.rating, 0);
            const average = totalScore / data.length;
            setReviews(data);
            setRatingDisplay(average);
        });
    }, []);

    const handleChange = e => {
        setReviewContent(e.target.value);
    }

    // create review:
    const saveReview = e => {
        e.preventDefault();
        const requestBody = {
                text_content: reviewContent,        
                rating: rating
        }
        const config = {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            }),
            body: JSON.stringify(requestBody)
        };
        fetch(`http://localhost:8001/backend/api/reviews/new/${id}/`, config)
        .then(response => {
            if (response.ok) {
                return response.json();
              }
            throw new Error('Something went wrong');
        })
        .then(data => {
            setCreated(true)
            setTimeout(() => navigate(`/home/restaurant/${id}`), 2000)
            return data.response
        })
        .catch(() => alert('Please fill all required data.'))
    }

    return (
        <div>
            <Header />
            <RestaurantHeader image={restaurantData.image} 
                              name={restaurantData.name}
                              category={restaurantData.category}
                              street={restaurantData.street}
                              telephone={restaurantData.phone}
                              website={restaurantData.website}
                              rating={ratingDisplay}
                              reviews={reviews}
            />
            <ReviewInput>
                <h2>Please Provide Rating and Review</h2>
                <StarRatingDiv>
                    <StarRatings
                        rating={rating}
                        starRatedColor="orange"
                        changeRating={setRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="2em"
                        starSpacing=".2em"
                    />
                </StarRatingDiv>
                <form>
                    <textarea 
                    type="textarea"
                    name="textValue"
                    rows={15}
                    cols={50}
                    placeholder="Your review helps others learn about great local businesses.&#13;&#10;Please don't review this business if you received a freebie for writing this review,&#13;&#10;or if you're connected in any way to the owner or employees."
                    onChange = {handleChange}
                    required
                    />
                    <button onClick={saveReview}>{created? 'SUCCESS' : 'SUBMIT'}</button>
                </form>
            </ReviewInput>
            <Footer />
        </div>
    )
}

export default ReviewPage