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
    position: relative;
    left: -55px;
    width: 100vw;
    overflow: hidden;
    height: 220px;
    background: #1E1E1E;
    color: #EFEFEF;
    
    // border: 3px solid red;

    @media(max-width: 768px){
        height: 180px;
        left: -24px;
    }
`

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    height: 100%;
    gap: 12px;
    padding: 12px;

    img{
        
    }
`
