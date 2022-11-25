import { FooterContainer, FooterIcons, FooterLinks, FooterWrap, Copyright, Line } from "./Footer.styles"


const Footer = () => {
  
    return (
        <FooterWrap>
            <FooterContainer>
                <FooterLinks>
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Press</a></li>
                    <li><a>Blog</a></li>
                    <li><a>iOS</a></li>
                    <li><a>Android</a></li>
                </ul>
                </FooterLinks>
                <FooterIcons>
                <ul>
                    <li><img src="/images/icons/facebook.svg"/></li>
                    <li><img src="/images/icons/twitter.svg"/></li>
                    <li><img src="/images/icons/googleplus.svg"/></li>
                    <li><img src="/images/icons/instagram.svg"/></li>
                </ul>
                </FooterIcons>
            </FooterContainer>
            <Line/>
            <Copyright>© Copyright Luna 2018</Copyright>
        </FooterWrap>
        
    )

}

export default Footer
