import { ImageStyle, RestaurantDetails, RestaurantSlider, 
    RestaurantDetailsCard, RestaurantPageWrapper,
 RatingSection } from "./RestaurantHeader.styles";
import {FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import StarRatings from "react-star-ratings";

const RestaurantHeader = props => {

    const category = () => {
        if (props.category === "A") return 'Asian';
        if (props.category === "I") return 'Italian';
        if (props.category === "B") return 'Burger';
        if (props.category === "V") return 'Vegetarian';
    }

    return (
            <RestaurantPageWrapper>
                <ImageStyle>
                <img src={props.image} />
                </ImageStyle>
                <RestaurantSlider>
                    <h1>{props.name}</h1>
                    <p>{category()}</p>
                    <RatingSection>
                    <StarRatings
                        rating={props.rating}
                        starRatedColor="orange"
                        // activate if collecting rating:
                        // changeRating={setRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="1.2em"
                        starSpacing=".2em"
                    />
                        <p>Reviews: {props.reviews.length}</p>
                    </RatingSection>
                </RestaurantSlider>
                <RestaurantDetailsCard>
                    <div>
                        <img src="/images/icons/map.png"/>
                    </div>
                    <RestaurantDetails>
                        <div>
                            <FiMapPin />
                            <p>{props.street}</p>
                        </div>
                        <div>
                            <BsTelephone />
                            <p>{props.telephone}</p>
                        </div>
                        <div>
                            <RiComputerLine />
                            <p>{props.website}</p>
                        </div>
                    </RestaurantDetails>
                </RestaurantDetailsCard>
            </RestaurantPageWrapper>
    )
}


export default RestaurantHeader