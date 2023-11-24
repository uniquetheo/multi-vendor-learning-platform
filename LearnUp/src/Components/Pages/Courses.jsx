import styled from "styled-components"

export const Courses = () => {
  return (
    <Container>
      <Header>
        <h1>Courses</h1>
      </Header>
      <Content>
        <Wrap></Wrap>
        <Wrap></Wrap>
        <Wrap></Wrap>
      </Content>
    </Container>
  )
}

const Container = styled.main`
  padding: 45px 55px;
  height: 100%;
  overflow-x: hidden;

  @media only screen and (max-width: 767px) {
    padding: 0 32px;
  }

  @media only screen and (max-width: 479px) {
    padding: 0 24px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
    font-weight: 500;
    text-transform: uppercase;
  }
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
  height: 500px;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`
