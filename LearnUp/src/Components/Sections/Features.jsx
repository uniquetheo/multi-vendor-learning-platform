import styled from "styled-components"

export const Features = () => {
  return (
    <Container>
        <Heading>
            <h2>By Joining eLearning Platform, One Can Avail a Lot Of Benefits.</h2>
            <span>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.</span>
        </Heading>
        <CardGroup className="card-group">
            <Card className="card">
                <img src="../pexels-rfstudio-3059751.jpg" className="card-img-top" alt="" />
                <CardBody className="card-body">
                    <h5 className="card-title">Standardization</h5>
                    <p className="card-text">When working in a global workplace, it’s often difficult to gauge learners’ training experiences</p>
                </CardBody>
            </Card>
            <Card className="card">
                <img src="../pexels-rfstudio-3059751.jpg" className="card-img-top" alt="" />
                <CardBody className="card-body">
                    <h5 className="card-title">Standardization</h5>
                    <p className="card-text">When working in a global workplace, it’s often difficult to gauge learners’ training experiences</p>
                </CardBody>
            </Card>
            <Card className="card">
                <img src="../pexels-rfstudio-3059751.jpg" className="card-img-top" alt="" />
                <CardBody className="card-body">
                    <h5 className="card-title">Standardization</h5>
                    <p className="card-text">When working in a global workplace, it’s often difficult to gauge learners’ training experiences</p>
                </CardBody>
            </Card>
            
            
        </CardGroup>
    </Container>
  )
}

const Container = styled.div`
    height: calc(100vh - 70px);
    background: #FEFEFE;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // gap: 40px;

    @media only screen and (max-width: 767px) {
        flex-direction: row;
        height: 915px;
        padding: 55px 0;
      }
    
      @media only screen and (max-width: 479px) {
        height: 809px;
        padding: 30px 0;
      }
`
const Heading = styled.div``

const CardGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 40px;
`

const Card = styled.div`
    margin: 20px;
`

const CardBody = styled.div``
