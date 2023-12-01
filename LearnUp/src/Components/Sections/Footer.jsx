import styled from "styled-components"

export const Footer = () => {
  return (
    <Container>
        
        <Copyright>
            <span>© 2023 LearnUp. All Rights Reserved.</span>
            {/* <span>Terms of Service | Privacy Policy</span> */}
        </Copyright>
        <Policy>
            <a href="">Terms of Service | Privacy Policy</a>
        </Policy>
        <Socials>
            <a href="https://www.youtube.com/"><img src="../yt-gray.svg" alt="" /></a>
            <a href="https://www.instagram.com/"><img src="../ig-gray.svg" alt="" /></a>
            <a href="https://www.github.com/"><img src="../github-gray.svg" alt="" /></a>
            <a href="https://www.linkedin.com/"><img src="../linkedIn-gray.svg" alt="" /></a>
        </Socials>


    </Container>
  )
}

const Container = styled.footer`
    position: relative;
    top: 70px;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: #1E1E1E;
    color: white;
    padding: 0 55px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;

    @media only screen and (max-width: 768px){
        padding: 0 33px;
    }

    @media only screen and (max-width: 420px){
        height: 100px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-evenly;
        
        text-align: center;
        padding: 0 24px;
        line-height: 18px;
        /* background-color: red; */
    }

    a {
        color: white;
    }
    

`

const Copyright = styled.div``
    

const Socials = styled.div`
    /* background: white; */

    img {
        width: 24px;
        height: 24px;
        object-fit: cover;
        margin: 0 5px;
    }
`

// const Address = styled.div``

const Policy = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`