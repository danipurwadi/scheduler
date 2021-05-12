import React from 'react';
import styled from 'styled-components'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
    .form-group {
        padding-bottom: 1em;
    }
`
function UploadSchedule() {
    return(
        <Styles>
            <br></br>
            <Col md={{ span: 8, offset: 1 }}>
                <Row>
                    <h1>Name of Schedule</h1>
                    <p>Description of new schedule</p>
                </Row>
                <Row>
                    <Form>
                        <Form.Group as={Row} controlId="uploadScheduleName">
                            <Form.Label column sm="1">Name</Form.Label>
                            <Col className="col-lg-5 col-sm-1">
                                <Form.Control type="text" placeholder="Name of event" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="uploadScheduleDescription">
                            <Form.Label column sm="1">Description</Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="Optional" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="uploadScheduleTiming">
                            <Form.Label column sm="1">Start Time</Form.Label>
                            <Col sm="2">
                                <Form.Control type="text" placeholder="09:00" />
                            </Col>

                            <Form.Label column sm="1">End Time</Form.Label>
                            <Col sm="2">
                                <Form.Control type="text" placeholder="10:00" />
                            </Col>
                            <Col sm="1">
                                <Button variant="success">
                                    <FontAwesomeIcon icon={ faPlus } />
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={{offset:2}}>
                        <Button variant="success">Add new Activity</Button>
                    </Col>
                    
                </Row>
                
            </Col>
        </Styles>
    ) 
}

export default UploadSchedule;