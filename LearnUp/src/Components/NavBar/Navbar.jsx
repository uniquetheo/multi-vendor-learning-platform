import { StyledButton } from "../Button/Button.styles";
import { Logo, NavMenu, NavbarContainer, MenuIcon, MobileNav } from "./Nav.styles";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

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

  return (
    <NavbarContainer>
      <Logo href="/">
        <img src="../../LearnUpWhiteText-NoBg.png" alt="" />
      </Logo>
      <MenuIcon onClick={showMobileNav}>
        {extendNavBar ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavMenu>
        <NavLink to="/"><span>Home</span></NavLink>
        <NavLink to="/courses"><span>Courses</span></NavLink>
        <NavLink to="/about"><span>About Us</span></NavLink>
        <NavLink to="/contact"><span>Contact Us</span></NavLink>
      </NavMenu>
      <a href="/login"><StyledButton>Login</StyledButton></a>
      <MobileNav id="mobile-nav">
        <NavLink to="/"><span>Home</span></NavLink>
        <NavLink to="/courses"><span>Courses</span></NavLink>
        <NavLink to="/about"><span>About Us</span></NavLink>
        <NavLink to="/contact"><span>Contact Us</span></NavLink>
      </MobileNav>
    </NavbarContainer>
  );
};
