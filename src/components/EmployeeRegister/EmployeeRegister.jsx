import React from "react";
import s from "./EmployeeRegister.module.css";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

const EmployeeRegister = (props) => {
  return (
    <div>
      <div className={s.title}>Register</div>
      <div className={s.regForm}>
        <Form onSubmit={props.handleSubmit}>
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
            <Form.Group as={Col} controlId="FirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="Surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control placeholder="Surname" />
            </Form.Group>

            <Form.Group as={Col} controlId="Patronymic">
              <Form.Label>Patronymic</Form.Label>
              <Form.Control placeholder="Patronymic" />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="Birthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control placeholder="dd-mm-yyyy" />
          </Form.Group>
          <Form.Group controlId="Education">
            <Form.Label>Education</Form.Label>
            <Form.Control placeholder="Information about your education" />
          </Form.Group>
          <Form.Group controlId="Gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Custom</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="ContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control placeholder="Phone number" />
          </Form.Group>

          <Form.Group>
            <Form.Check
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

export default EmployeeRegister;
