import React from 'react';
import styled from 'styled-components'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
    .navbar {
        background-color: #EAECEB;
        padding: 1em;
    }
    .toggle, .toggle .nav-link {
        color: #386641;
        stroke: #386641;
        transition: 0.3s;
        &:hover {
            color: #BC4749;
            stroke: #BC4749;
        }
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
                        <Form.Group as={Row} controlId="formScheduleName">
                            <Form.Label column sm="1">
                            Name
                            </Form.Label>
                            <Col sm="5">
                            <Form.Control type="text" placeholder="Actly stuff" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formScheduleDescription">
                            <Form.Label column sm="1">
                            Description
                            </Form.Label>
                            <Col sm="5">
                            <Form.Control type="text" placeholder="Optional" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formScheduleTimings">
                            <Form.Label column sm="1">
                                Start Time
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control type="text" placeholder="Optional" />
                            </Col>

                            <Form.Label column sm="1">
                                End Time
                            </Form.Label>
                            <Col sm="2">
                                <Form.Control type="text" placeholder="Optional" />
                            </Col>
                            <Col sm="1">
                                <Button variant="success">
                                    <FontAwesomeIcon icon={ faPlus } />
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Col>
        </Styles>
    ) 
}

export default UploadSchedule;