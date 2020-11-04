import React from "react";
import s from "./CompanyRegister.module.css";
import { Button, Col, Form, InputGroup } from "react-bootstrap";


const CompanyRegister = () => {
  return (
    <div>
      <div className={s.title}>Register</div>
      <div className={s.regForm}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="Login">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" placeholder="Enter login" required />
            </Form.Group>

            <Form.Group as={Col} controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="PasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password again"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="SecretWord">
            <Form.Label>Secret word</Form.Label>
            <Form.Control placeholder="Enter your secret word" />
          </Form.Group>

          <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Username" required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="UserType">
              <Form.Label>Who are you?</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Company</option>
                <option>Employee</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CompanyRegister;
