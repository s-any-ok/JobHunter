import React from "react";
import s from "./Login.module.css";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  if (props.isAuth) return <Redirect to={"/empProfile/" + props.ChildID} />;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Row>
            <Col sm={12}>
              <Form onSubmit={props.handleSubmit}>
                <Form.Group controlId="Login">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    type="text"
                    name="login"
                    required
                    placeholder="Login"
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Button variant="dark" type="submit" block>
                    Login
                  </Button>
                </Form.Group>

                <Form.Group>
                  <Row>
                    <Col className={s.regText} md={{ span: 6, offset: 3 }}>
                      Register as
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <Col>
                      <Button variant="dark" href="compRegister" block>
                        Company
                      </Button>
                    </Col>

                    <Col>
                      <Button variant="secondary" href="empRegister" block>
                        Employee
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" type="submit" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
