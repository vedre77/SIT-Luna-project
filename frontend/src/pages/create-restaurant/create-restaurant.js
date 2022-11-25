import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FormWrapper, SearchBtn, CreatePage } from "./create-restaurant.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateRestaurant = () => {

    const [restaurantImage, setRestaurantImage] = useState(null)
    const [created, setCreated] = useState(false)
    const [restaurantData, setRestaurantData] = useState(
        {name: "",
        category: "",
        country: "",
        street: "",
        city: "",
        zip: "",
        website: "",
        phone: "",
        email: "",
        opening_hours: "",
        price_level: ""
        }
    )
    const navigate = useNavigate();
    const localToken = localStorage.getItem("token");
    const handleChange = (event) => {
        setRestaurantData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleUpload = e => {
        const imageUrl = e.target.files;
        setRestaurantImage(imageUrl[0]);
      }
      
      const createRestaurant = e => {
        e.preventDefault();
        const formData = new FormData();       
        formData.append("name", restaurantData.name);
        formData.append("category", restaurantData.category);
        formData.append("country", restaurantData.country);
        formData.append("street", restaurantData.street);
        formData.append("city", restaurantData.city);
        formData.append("zip", restaurantData.zip);
        formData.append("website", restaurantData.website);
        formData.append("phone", restaurantData.phone);
        formData.append("email", restaurantData.email);
        formData.append("opening_hours", restaurantData.opening_hours);
        formData.append("price_level", restaurantData.price_level);
        formData.append("image", restaurantImage);
        const url = "http://localhost:8001/backend/api/restaurants/new/"
        const config = {
            method: "POST",
            headers: {           
                "Authorization": `Bearer ${localToken}`
            },
            body: formData,
        }
        fetch(url, config)
            .then(response => {
                if (response.ok) {
                    return response.json();
                  }
                throw new Error('Something went wrong');
            })
            .then(data => {
                setCreated(true)
                setTimeout(() => navigate('/home'), 2000)
                return data.response
            })
            .catch(error => alert('Please fill all required data.'))
    }

   
    return (
        <div>
            <Header />
            <CreatePage>
                <h2>CREATE NEW RESTAURANT</h2>
                <FormWrapper>
                    <form>
                        <label>
                        Name *
                        <input type="text" name="name" onChange = {handleChange} required></input>
                        </label>
                        <label>
                        Category *
                        <select value={restaurantData.category} name="category" onChange={handleChange} required>
                            <option value="">Select a value ...</option>
                            <option value="V">Vegetarian</option>
                            <option value="I">Italian</option>
                            <option value="B">Burger</option>
                            <option value="A">Asian</option>
                        </select>
                        </label>
                        <label>
                        Country *
                        <select value={restaurantData.country} name="country" onChange={handleChange} required>
                            <option value="">Select a value ...</option>
                            <option value="switzerland">Switzerland</option>
                            <option value="germany">Germany</option>
                            <option value="italy">Italy</option>
                            <option value="france">France</option>
                        </select>
                        </label>
                        <label>
                        Street *
                        <input type="text" name="street" onChange = {handleChange} required></input>
                        </label>
                        <label>
                        City *
                        <input type="text" name="city" onChange = {handleChange} required></input>
                        </label>
                        <label>
                        Zip
                        <input type="text" name="zip" onChange = {handleChange}></input>
                        </label>
                        <label>
                        Website 
                        <input type="url" name="website" onChange = {handleChange}></input>
                        </label>
                        <label>
                        Phone *
                        <input type="number" name="phone" onChange = {handleChange} required></input>
                        </label>
                        <label>
                        Email
                        <input type="email" name="email" onChange = {handleChange}></input>
                        </label>
                        <label>
                        Opening hours *
                        <input type="text" name="opening_hours" onChange = {handleChange} required ></input>
                        </label>
                        <label>
                        Price level 
                        <select value={restaurantData.price_level} name="price_level" onChange={handleChange}>
                            <option value="">Select a value ...</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                        </label>
                        {/* <input id="select" type="file" name="file"  onChange = {handleChange} style={{ display: 'none' }}></input> */}
                        {/* Image */}
                        <input id="select" multiple type='file' name='image' accept='image/' onChange={e => handleUpload(e)}></input>
                        <label htmlFor="select">
                            {/* <Btn>
                            <button>CHOOSE A FILE...</button>
                            </Btn> */}
                        </label>
                        <SearchBtn>
                            <button type={"submit"} onClick={createRestaurant}>{created ? 'SUCCESS!' : 'Create'}</button>
                        </SearchBtn>
                    </form>
                </FormWrapper>
            </CreatePage>
            <Footer />
        </div>
    )
}

export default CreateRestaurant
