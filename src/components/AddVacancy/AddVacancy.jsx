import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import {
  createFiledGroup,
  createFormSelect,
} from "../common/FormsControl/FormsControl";

const AddVacancy = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Vacancy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Row>
            <Col sm={12}>
              <Form onSubmit={props.handleSubmit}>
                {createFiledGroup(
                  "Objective",
                  "Objective",
                  "text",
                  "Enter objective",
                  true
                )}

                <Row>
                  <Col>
                    {createFormSelect("Experience", "Experience", [
                      "< 1 year",
                      "1 year",
                      "2 years",
                      "3 years",
                      "4 years",
                      "5 years",
                      "> 5 years",
                    ])}
                  </Col>
                  <Col>
                    {createFormSelect("Employment", "Employment", [
                      "Full-time",
                      "Part-time",
                      "Remoute",
                    ])}
                  </Col>
                </Row>

                <Form.Group controlId="Information">
                  <Form.Label>Information</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter information about the vacancy"
                    rows={3}
                  />
                </Form.Group>
                <Form.Row>
                  {createFiledGroup(
                    "Salary",
                    "Salary",
                    "text",
                    "Enter salary in USD ($)",
                    false,
                    Col
                  )}
                  {createFiledGroup(
                    "ContactPhoneNumber",
                    "Phone Number",
                    "text",
                    "Enter phone number",
                    true,
                    Col
                  )}
                </Form.Row>

                {createFiledGroup(
                  "Adress",
                  "Adress",
                  "text",
                  "Enter adress",
                  false
                )}

                <Form.Group>
                  <Button variant="primary" type="submit" block>
                    Add Vacancy
                  </Button>
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

export default AddVacancy;
