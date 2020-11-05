import React from "react";
import s from "./EmployeeRegister.module.css";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { createFiledGroup } from "../common/FormsControl/FormsControl";

const EmployeeRegister = (props) => {
  return (
    <div>
      <div className={s.title}>Register</div>
      <div className={s.regForm}>
        <Form onSubmit={props.handleSubmit}>
          <Form.Row>
            {createFiledGroup(
              "Login",
              "Login",
              "text",
              "Enter login",
              true,
              Col
            )}
            {createFiledGroup(
              "Password",
              "Password",
              "password",
              "Enter password",
              true,
              Col
            )}
          </Form.Row>

          <Form.Row>
            {createFiledGroup(
              "Email",
              "Email",
              "email",
              "Enter email",
              false,
              Col
            )}
            {createFiledGroup(
              "PasswordConfirm",
              "Confirm Password",
              "password",
              "Enter password again",
              true,
              Col
            )}
          </Form.Row>

          {createFiledGroup(
            "SecretWord",
            "Secret word",
            "text",
            "Enter your secret word"
          )}
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
            {createFiledGroup(
              "FirstName",
              "First Name",
              "text",
              "First Name",
              false,
              Col
            )}
            {createFiledGroup(
              "MiddleName",
              "Middle Name",
              "text",
              "Middle Name",
              false,
              Col
            )}
            {createFiledGroup(
              "LastName",
              "Last Name",
              "text",
              "Last Name",
              false,
              Col
            )}
          </Form.Row>
          {createFiledGroup("Birthday", "Birthday", "text", "dd-mm-yyyy")}
          {createFiledGroup("Objective", "Objective", "text", "Your objective")}
          {createFiledGroup("Birthday", "Birthday", "text", "dd-mm-yyyy")}
          {createFiledGroup(
            "Education",
            "Education",
            "text",
            "Information about your education"
          )}
          {createFiledGroup(
            "AdditionalEducation",
            "Additional Education",
            "text",
            "Your additional Education"
          )}
          {createFiledGroup(
            "Experience",
            "Experience",
            "text",
            "Your work experience"
          )}
          {createFiledGroup("Skills", "Skills", "text", "Your skills")}

          <Form.Group controlId="Gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Custom</option>
            </Form.Control>
          </Form.Group>
          {createFiledGroup("Adress", "Adress", "text", "Your adress")}
          {createFiledGroup(
            "PhoneNumber",
            "Phone Number",
            "text",
            "Your current phone number"
          )}

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
