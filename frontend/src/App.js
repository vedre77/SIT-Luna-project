import Login from "./components/Login/Login";
import HomePage from "./pages/homepage/homepage";
import CreateRestaurant from "./pages/create-restaurant/create-restaurant";
import SearchPage from "./pages/searchpage/searchpage";
import RestaurantPage from "./pages/restaurantpage/restaurantpage";
import ReviewPage from "./pages/reviewpage/reviewpage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from "./pages/profilepage/ProfilePage";


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/create" element={ <CreateRestaurant /> } />
            <Route path="/search" element={ <SearchPage/> } />
            <Route path="/profile" element={ <ProfilePage /> } />
            <Route path="/home/restaurant/:id" element={ <RestaurantPage/> } />
            <Route path="/search/restaurant/:id" element={ <RestaurantPage/> } />
            <Route path="/review/:id" element={ <ReviewPage/> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
