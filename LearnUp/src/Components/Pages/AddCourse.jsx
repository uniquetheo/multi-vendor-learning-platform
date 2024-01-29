import styled from "styled-components"
import { StyledForm } from "./ContactForm"
import { useState } from "react"
// import { SharedStyles } from "./ContactForm"

const AddCourse = () => {
    const [courseCategory,setCourseCategory] = useState('')
    
  return (
    <Container>
        <Header>Add Course</Header>
        <MyStyledForm>

        </MyStyledForm>
    </Container>
  )
}

export default AddCourse

const Container = styled.main``

const Header = styled.div``
    
const MyStyledForm = styled(StyledForm)``