import styled from "styled-components"


export const Navbar = () => {

    

  return (
    <div>
        <Nav>
            <Logo>
                <img src="../vite.svg"/>

            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="email.svg"/>
                    <span>Home</span>
                </a>
                <a href="/get-started">
                    <img src="../figma.svg"/>
                    <span>Get Started</span>
                </a>
                <a href="/Services">
                    <img src="vscode.svg"/>
                    <span>Offers</span>
                </a>
                <a href="/contact">
                    <img src="../phone.svg"/>
                    <span>Contact</span>
                </a>
                
            </NavMenu>
            <button className="btn btn-light">Sign In</button>
        </Nav>
    </div>
  )
}
 
const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 70px;
    background: #1F5EFF;
    display: flex;
    justify-content: space-between;
    
    align-items: center;
    padding: 0 55px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    
    img {
        display: block;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    position: relative;
    

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;

        img {
            width: 22px;
            padding: 0 2px;
        }

        span {
            color: rgb(249,249,249);
            font-size: 13px;
            padding: 0px 2px;
            letter-spacing: 1.42px;
            white-space: nowrap;
            transition: 250ms;
            position: relative;

            &:before {
                background: rgb(249,249,249);
                border-radius: 0 0 4px 4px;
                position: absolute;
                bottom: -4px;
                left: 0px;
                right: 0px;
                content: "";
                height: 2px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                width: auto;
                visibility: hidden;
            }
        }
   
        &:hover {
            
            span {
                font-size: 14px;
            }
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
  
}
`
