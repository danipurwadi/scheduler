import React from 'react';
import styled from 'styled-components'
import { Row, Col, Form, Button } from 'react-bootstrap';

const Styles = styled.div`
    .form-group {
        padding-bottom: 1em;
    }
`
function CreateSchedule() {
    return(
        <Styles>
            <br></br>
            <Col md={{ span: 8, offset: 1 }}>
                <Row>
                    <h1>Create New Schedule</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group as={Row} controlId="createScheduleTitle">
                            <Form.Label column sm="1">
                                Title
                            </Form.Label>
                            <Col className="col-lg-5 col-sm-1">
                                <Form.Control type="text" placeholder="Name of event" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="createScheduleDescription">
                            <Form.Label column sm="1">
                                Description
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="Optional" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="createScheduleTimings">
                            <Form.Label column sm="1">
                                Earliest
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control type="text" placeholder="09:00" />
                            </Col>

                            <Form.Label column sm="1">
                                Latest
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control type="text" placeholder="10:00" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="createSchedulePassword">
                            <Form.Label column sm="1">
                                Password
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="password"/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={{offset:2}}>
                        <Button variant="success">Create Schedule</Button>
                        <Button variant="danger">Cancel</Button>
                    </Col>
                </Row>
            </Col>
        </Styles>
    ) 
}

export default CreateSchedule;