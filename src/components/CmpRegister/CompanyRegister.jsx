import React from "react";
import s from "./CompanyRegister.module.css";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import {
  createFiledGroup,
  createFormSelect,
} from "../common/FormsControl/FormsControl";

const CompanyRegister = ({ handleSubmit }) => {
  return (
    <div>
      <div className={s.title}>Register</div>
      <div className={s.regForm}>
        <Form onSubmit={handleSubmit}>
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
            {createFiledGroup("TIN", "TIN", "text", "Enter TIN", true, Col)}
            {createFiledGroup(
              "CompanyName",
              "Company Name",
              "text",
              "Enter company name",
              true,
              Col
            )}
          </Form.Row>
          <Form.Group controlId="Information">
            <Form.Label>Information</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter some information about your company"
              rows={3}
            />
          </Form.Group>
          {createFiledGroup(
            "Link",
            "Link",
            "text",
            "Enter link to your website"
          )}
          {createFormSelect("BusinessType", "Business Type", [
            "Financial",
            "Product",
            "Social",
            "Education",
            "Security",
            "Retailers",
            "Services",
            "Agriculture",
            "Transportation",
            "RealEstate",
            "Advertising",
            "Manufacturing",
            "Mining",
            "Utilities",
            "Other",
          ])}
          {createFiledGroup(
            "PhoneNumber",
            "Phone Number",
            "text",
            "Your current phone number"
          )}

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
