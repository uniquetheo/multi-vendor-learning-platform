import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 70px;
  background: #040404;
  color: white;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0 55px;
  z-index: 3;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 0 32px;
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
    padding: 0 24px;
  }
`;

export const Logo = styled.a`
  height: 35px;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    display: none;
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  @media only screen and (max-width: 767px) {
    display: flex;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  position: relative;

  @media only screen and (max-width: 767px) {
    display: none;
  }

  a {
    display: inline-block;
    color: white;
    padding: 0 24px;
    font-size: 1.2rem;

    span {
      position: relative;

      &:after {
          content: "";
          height: 2px;
          background: white;
          position: absolute;
          right: 0;
          left: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }
      }

      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
  }
`;

export const MobileNav = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  z-index: -1;
  opacity: 0; 
  /* color: #040404; */
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 0;
  background: #040404;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 70px);
    /* display: flex; */
    opacity: 1;

  }

  @media screen and (max-width: 479px) {
    height: calc(100vh - 70px);
    padding: 0 24px;
    /* display: flex; */
    opacity: 1;
  }

  a {
    color: white;
  }
`;
