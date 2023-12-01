import { SecondaryButton, StyledButton } from "../Button/Button.styles";
import { Logo, NavMenu, NavbarContainer, MenuIcon, MobileNav } from "./Nav.styles";
import learnUp from  '../../assets/logoWhite.png' //'../../learnUpWhite.svg'
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);
  const showMobileNav = () => {
    setExtendNavBar(!extendNavBar);

    const mobileNav = document.getElementById("mobile-nav");

    if (extendNavBar) {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "flex";
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NavbarContainer>
      <MenuIcon onClick={showMobileNav}>
        {extendNavBar ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Logo href="/">
        <img src={learnUp} alt="learnUpLogo" />
      </Logo>

      <NavMenu>
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/"><span>Home</span></NavLink>
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/courses"><span>Courses</span></NavLink>
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/about"><span>About Us</span></NavLink>
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/contact"><span>Contact Us</span></NavLink>
      </NavMenu>
      {!auth?.currentUser?.email && <a href="/login"><StyledButton>Login</StyledButton></a>}
      {auth?.currentUser?.email && <a><SecondaryButton onClick={logout}>Logout</SecondaryButton></a>}
      <MobileNav id="mobile-nav">
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/"><span>Home</span></NavLink>
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/courses"><span>Courses</span></NavLink>
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/about"><span>About Us</span></NavLink>
        <NavLink onClick={e => e.target.style.MobileNav.display = "none"} to="/contact"><span>Contact Us</span></NavLink>
      </MobileNav>
    </NavbarContainer>
  );
};
