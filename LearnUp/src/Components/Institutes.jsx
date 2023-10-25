import styled from "styled-components"

export const Institutes = () => {
  return (
    <Container>
        <Wrap>
            <img src="../coursera.svg" className="img-fluid" alt="cousera" />
            <img src="../udemy.svg" className="img-fluid" alt="udemy" />
            <img src="../oxford.svg" className="img-fluid" alt="oxford" />
            <img src="../michigan.svg" className="img-fluid" alt="michigan" />
        </Wrap>
    </Container>
  )
}



const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 220px;
    background: #1E1E1E;
    color: #EFEFEF;
    
    /* border: 3px solid red; */

    @media only screen and (max-width: 767px){
        height: 160px;
        padding: 0 32px;
    }

    @media only screen and (max-width: 479px){
        height: 200px;
        padding: 0 24px;
    }
`

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    height: 100%;
    gap: 12px;
    padding: 12px;

    @media only screen and (max-width: 767px){
        height: 100%;
        gap: 6px;
        padding: 6px;
        /* grid-template-columns: 1fr 1fr;  */
    }
    @media only screen and (max-width: 479px) {
        grid-template-columns: 1fr 1fr;
        gap: 0;
        padding: 0;
      }

    img{
        width: 100%;
        object-fit: cover;
    }
`
