import { SearchBarStyle } from "./SearchBar-style"
import { useState } from "react"

const SearchBar = ({filterFor}) => {

    console.log(filterFor)

    const [formData, SetFormData] = useState(
        {
            search: "",
            category: ""
        }
    )

    const handleChange = (event) => {
        SetFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    return (
        <SearchBarStyle>
            { filterFor==='restaurant' &&
            <form>
                <input
                type="text" 
                name="search" 
                placeholder="Search"
                onChange={handleChange}
                autoComplete="off"
                />
                <select value={formData.category} name="category" onChange={handleChange} required>
                    <option value="">Select a category ...</option>
                    <option value="italian">Italian</option>
                    <option value="peruvian">Peruvian</option>
                    <option value="japanese">Japanese</option>
                    <option value="vietnamese">Vietnamese</option>
                </select>
            </form>}
            { filterFor==='reviews' &&
            <form>
                <input
                type="text" 
                name="search" 
                placeholder="Search"
                onChange={handleChange}
                autoComplete="off"
                />
                <select value={formData.category} name="category" onChange={handleChange} required>
                    <option value="">Select a category ...</option>
                    <option value="mine">My Review</option>
                    <option value="all">All Reviews</option>
                </select>
            </form>}
            { filterFor==='users' &&
                <input
                id="userSearch"
                type="text" 
                name="search" 
                placeholder="Search users..."
                onChange={handleChange}
                autoComplete="off"
                />}
        </SearchBarStyle>

    )
}


export default SearchBar