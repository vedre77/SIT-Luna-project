import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader"
import ReviewFilterCard from "../../components/ReviewFilterCard/ReviewFilterCard"
import { FilterSection, WriteReviewSection, 
ReviewSection, FilterReviewInput, 
Form } from "./restaurantpage.styles"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AiOutlineClockCircle } from "react-icons/ai"
import { GrMoney } from "react-icons/gr"
import { nanoid } from "@reduxjs/toolkit"

const RestaurantPage = () => {

    const [restaurantData, setRestaurantData] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    const localToken = localStorage.getItem("token");
    const navigate = useNavigate();
   
    useEffect(() => {
            const config = {
                method: "GET",
                headers: new Headers ({
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localToken}`
                })
            };
        fetch(`http://localhost:8001/backend/api/restaurants/${id}`, config).then(response => {
            return response.json();
            
        }).then(data => setRestaurantData(data))
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
        fetch(`http://localhost:8001/backend/api/reviews/restaurant/${id}`, config).then(response => {
            return response.json();
        }).then(data => {
            const totalScore = data.reduce((acc, curr) => acc + curr.rating, 0);
            const average = data.length === 0 ? totalScore : totalScore / data.length;
            setReviews(data);
            setRating(average);
        });
    }, []);

    const reviewsList = reviews.map(elem => <ReviewFilterCard 
                                                key={nanoid()}
                                                id={elem.id}
                                                profile_pic={elem.creator.profile_pic}
                                                name={elem.creator.username}
                                                created={elem.created}
                                                content={elem.text_content}
                                                likes={elem.liked_by.length}
                                            />
                                    );

    return (
        <div>
            <Header />
            <RestaurantHeader image={restaurantData.image} 
                              name={restaurantData.name}
                              category={restaurantData.category}
                              street={restaurantData.street}
                              telephone={restaurantData.phone}
                              website={restaurantData.website}
                              rating={rating}
                              reviews={reviews}
            />
            <ReviewSection>
                <FilterSection>
                    <Form>
                        <FilterReviewInput
                            placeholder="Filter list..."
                            autoComplete="off"
                            type="text"
                            name={"search"}
                        />
                            <button type="submit">FILTER</button>
                    </Form>
                        {reviewsList.length === 0 ? 
                        <h3>'Be the first to write a review!'</h3> 
                        : reviewsList}
                </FilterSection>
                <WriteReviewSection>
                    <div className="restaurant-info">
                        <AiOutlineClockCircle />
                        <p>{restaurantData.opening_hours}</p>
                    </div>
                    <hr/>
                    <div className="restaurant-info">
                        <GrMoney />
                        <p>Price level: $$$</p>
                    </div>
                    <hr/>
                    <div>
                        <button onClick={() => navigate(`/review/${id}`)}>WRITE A REVIEW</button>
                        <button>EDIT DATA</button>
                    </div>
                </WriteReviewSection>
            </ReviewSection>
            <Footer />
        </div>
    )
  
}
  
export default RestaurantPage
  