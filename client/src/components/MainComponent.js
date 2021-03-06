import React from 'react';
import styled from 'styled-components'
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
    p {
        margin: 0px; 
    }
    .containerMargin {
        padding: 20px 30px;
    }
`

function CreatedSchedule() {
    return(
        <Row>
            <Card>
                <Card.Body>
                    <Row className="justify-content-end">
                        <Col>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>This is a testing</Card.Text>
                        </Col>
                        <Col className="align-self-center col-md-auto">
                            <FontAwesomeIcon icon={ faUser } size="lg" />
                        </Col>
                        <Col className="align-self-center" md={{span: 2}}>
                            <p>10 people</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
        
        
    )
}
function Main() {
    return(
        <Styles>
            <br></br>
            <Row>
                <Col md={{ span: 5, offset: 1 }}>
                    <Row>
                        <h1>Welcome!</h1>
                    </Row>
                    
                    <br/>
                    <Row>
                        <h3>Created</h3>
                    </Row>
                    <Container className="border containerMargin">
                        <CreatedSchedule />
                        <CreatedSchedule />
                        <CreatedSchedule />
                        <br/>
                        <Row md="auto" className="justify-content-center">
                            <Button className="mt-auto" variant="secondary" size="lg">Load More</Button>
                        </Row>
                    </Container>
                    
                    <br/>
                    <Row>
                        <h3>History</h3>
                    </Row>
                    <Container className="border containerMargin">
                        
                        <CreatedSchedule />
                        <CreatedSchedule />
                        <CreatedSchedule />
                        <br/>
                        <Row md="auto" className="justify-content-center">
                            <Button className="mt-auto" variant="secondary" size="lg">Load More</Button>
                        </Row>
                        
                    </Container>                    
                </Col>
                <Col md={{ span: 1 }}></Col>
                <Col className="border border-primary justify-content-center" md={{ span: 2 }}>
                    <Row className="justify-content-center" md="auto">
                        <Button>Create New</Button>
                    </Row>
                    <Row className="justify-content-center" md="auto">
                        <Button>Join Schedule</Button>
                    </Row>
                </Col>
            </Row>
        </Styles>
    ) 
}

export default Main;