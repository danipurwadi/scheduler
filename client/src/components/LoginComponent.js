import React from 'react';
import styled from 'styled-components'
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const Styles = styled.div`
    html, body {
        height: 100%;
    }
    
    .min-100 {
        min-height: 100%;
        height: 100%;
    }
`
function Login() {
    return(
        <div style={{height: "90vh"}}>
            <Row className="align-items-center h-75 w-100">
            <Col md={{span: 4, offset:"4"}} >
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Row>
                            <Col md="3"><Form.Label>Email address</Form.Label></Col>
                            <Col><Form.Control type="email" placeholder="Enter email" /></Col>
                        </Row>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicPassword">
                        <Row>
                            <Col md="3"><Form.Label>Password</Form.Label></Col>
                            <Col><Form.Control type="password" placeholder="Password" /></Col>
                        </Row>
                    </Form.Group>
                    <br/>
                    <Row className="justify-content-center" md="auto">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Row>
                    
                </Form>
            </Col>
            </Row>
        </div>
    ) 
}

export default Login;