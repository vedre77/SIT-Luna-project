import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserCard from "../../components/UserCard/UserCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import RestaurantCard from "../../components/RestaurantCard/restaurantCard";
import { ButtonContainer, MainStyle, 
    Grid, } from "./searchpage-styles";
import { useEffect } from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';



const SearchPage = () => {
    
    const [users, setUsers] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [render, setRender] = useState("restaurant");
    const localToken = localStorage.getItem("token");

    useEffect(() => {
      // user fetch
        const config = {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localToken}`
            })
        };
        fetch("http://localhost:8001/backend/api/users/list/", config).then(response => {
            return response.json();
            
        }).then(data => {
            data.forEach((result) => {
                setUsers(oldArray => [...oldArray, result]);
            });
        });
        // restaurant fetch
        fetch("http://localhost:8001/backend/api/restaurants/", config).then(response => {
            return response.json();
        }).then(data => {
            data.forEach((result) => {
                setRestaurants(oldArray => [...oldArray, result]);
            });
        });
        // review fetch 
        fetch("http://localhost:8001/backend/api/reviews/restaurant/17/", config).then(response => {
            return response.json();
        }).then(data => setReviews(data));
        // all users fetch
        fetch("http://localhost:8001/backend/api/users/list/", config).then(response => {
            return response.json();   
        }).then(data => setUsers(data));
    }, []);
    
    return (
        <>
            <Header />
            <SearchBar filterFor={render}/>
            <MainStyle>
                <ButtonContainer>
                    <button onClick={() => setRender("restaurant")}>RESTAURANTS</button>
                    <button onClick={() => setRender("reviews")}>REVIEWS</button>
                    <button onClick={() => setRender("users")}>USERS</button>
                </ButtonContainer>
                {/* <Line>
                    <hr/>
                </Line> */}
                <Grid>
                    {users.map((user) => {
                                if(render === 'users') {
                                    return <UserCard
                                                key={nanoid()}
                                                user={user}
                                            />;
                                }
                            })}        
                    {restaurants.map(restaurant => {
                            if(render === "restaurant") {
                                return <RestaurantCard 
                                            key={nanoid()}
                                            restaurant={restaurant}
                                        />;
                            }
                        })}
                    {reviews.map((review) => {
                            if(render === "reviews") {
                                return <ReviewCard
                                            key={nanoid()}
                                            id={review.id}
                                            review={review}
                                        />;
                            }
                        })}
                </Grid>
            </MainStyle>
            <Footer />
        </>
    )
}

export default SearchPage