import styled from "styled-components"

export const CoursesSection = () => {
  return (
    <Container>
        <CourseHeader>
          <h1>Featured Courses</h1>
          <span>Our Best Courses Offered and Taught By Best of The Instructors</span>
        </CourseHeader>
        <CardWrap>
          <Card>Card1</Card>
          <Card>Card2</Card>
          <Card>Card3</Card>
        </CardWrap>
    </Container>
  )
}

const Container = styled.div`
    /* height: calc(100vh - 70px); */
    height: 777px;
    width: 100%;
    padding: 0 55px;
    overflow: hidden;
    background: #F8F9FF;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media only screen and (max-width: 767px){
      padding: 0 32px;
      height: 1426px;
    }

    @media only screen and (max-width: 479px){
      padding: 0 24px;
      height: 1611px;
    }
`

const CourseHeader = styled.div``
  
const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  @media only screen and (max-width: 767px) {
    height: 1093px;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 479px) {
    height: 1320px;
  }

`

const Card = styled.div`
  width: 30%;
  height: 351px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d,
      0 -6px 16px -6px #00000008;

  @media only screen and (max-width: 767px) {
    width: 87%;
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
    height: 408px;
  }
`
