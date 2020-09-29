import React, { Component } from "react";
import s from "./Login.module.css";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(e.target.Password.value);
  }
  render() {
    return (
      <Modal
        {...this.props}
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
                <Form onSubmit={this.handleSubmit}>
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
                    <Button variant="dark" href="#" block>
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Login;
