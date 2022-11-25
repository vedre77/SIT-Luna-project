import { LoginContainer } from "./Login.styles"
import { useDispatch } from "react-redux";
import { addUser, addToken, addRefreshToken } from "../../redux/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { LoginBtn, FormContainer } from "./Login.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    };
      
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    };
      
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "http://localhost:8001/backend/token/"
        
        const jsBody = {
            email: email,
            password: password
        }
        
        const config = {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json"
            }),
           body: JSON.stringify(jsBody)
        }

        fetch(url, config)
        .then(response => response.json())
        .then(data => {
            if (data.access) {
                console.log(data.access)
                localStorage.setItem("token", data.access)
                dispatch(addToken(data.access))
                dispatch(addRefreshToken(data.refresh))
                dispatch(addUser(data.user))
                navigate('/home')
            } else {
                alert ('Error, please check your credentials!')
                }
            })
        };


    return (
        <>
            <Header />
            <LoginContainer>
                <form onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <FormContainer>
                        <input 
                            type="text" 
                            name={"email"} 
                            placeholder="Username"
                            onChange={handleEmailChange}
                        />
                        <input 
                            autoComplete="off"
                            type="password" 
                            id={"password"}
                            name={"password"}
                            placeholder="Password"
                            onChange={handlePasswordChange}
                        />
                        <LoginBtn>
                            <button type="submit">Login</button>
                        </LoginBtn>
                    </FormContainer>
                </form>
            </LoginContainer>
            <Footer />
        </>
    )

}

export default Login
