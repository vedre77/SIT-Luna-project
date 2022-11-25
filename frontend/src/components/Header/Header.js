import { HeaderContainer, LinkContainer, Logo, Link, HeaderBtn, BtnLeft, BtnRight, Line } from "./Header.styles"
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()

    return (
        <>
            <HeaderContainer>
                <Logo className="Logo" onClick={() => navigate("/home/")}>
                    <img src="/images/icons/logo.png" />
                </Logo>
                <LinkContainer>
                    <Link>
                        <button className="Link" onClick={() => navigate("/home/")}>
                            <p>Home</p>
                        </button>
                    </Link>
                    <Link>
                        <button className="Link" onClick={() => navigate("/search/")}>
                            <p >Search</p>
                        </button>
                    </Link>
                    <Link>
                        <button className="Link" onClick={() => navigate("/profile/")}>
                            <p>Profile</p>
                        </button>
                    </Link>
                    <Link>
                        <button className="Link" onClick={() => navigate("/create/")}>
                            <p>Create</p>
                        </button>
                    </Link>
                    <HeaderBtn>
                        <BtnLeft>
                        <button className="Link" onClick={() => navigate("/")}>
                                <p >SIGNUP</p>
                            </button>
                        </BtnLeft>
                    </HeaderBtn>
                    <HeaderBtn>
                        <BtnRight>
                        <button className="Link" onClick={() => navigate("/")}>
                                <p>LOGIN</p>
                            </button>
                        </BtnRight>
                    </HeaderBtn>
                </LinkContainer>
            </HeaderContainer>
        </>
    )

}

export default Header