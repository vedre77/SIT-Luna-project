import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { SearchBtn, SearchContainer, 
    FormContainer, BestRated, 
    Grid, HomePageWrapper } from "./homepage.styles"
import RestaurantCard from "../../components/RestaurantCard/restaurantCard"
import { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


const HomePage = () => {
    
    const [restaurants, setRestaurants] = useState([]);
    const localToken = localStorage.getItem("token");

    // GET all restaurants:
    useEffect(() => {
            const config = {
                method: "GET",
                headers: new Headers ({
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localToken}`
                })
            };
        fetch("http://localhost:8001/backend/api/restaurants/", config).then(response => {
            return response.json();
        }).then(data => setRestaurants(data));
    }, []);

    return (
        <>
            <Header />
                <HomePageWrapper>
                    <SearchContainer>
                        <FormContainer>
                                <form>
                                    <input 
                                        autoComplete="off"
                                        type="text" 
                                        name={"search"} 
                                        placeholder="Search ..."
                                    />
                                    <SearchBtn type="submit">Search</ SearchBtn>
                                </form>
                        </FormContainer>
                    </SearchContainer>
                    <BestRated>
                        <h2>BEST RATED RESTAURANTS</h2>
                        <Grid>
                        {restaurants && restaurants.map(restaurant => {
                                    return <RestaurantCard
                                                key={nanoid()}
                                                restaurant={restaurant}
                                            />;
                        })}
                        </Grid>
                    </BestRated>
                </HomePageWrapper>
            <Footer />
        </>
    )
}

export default HomePage
