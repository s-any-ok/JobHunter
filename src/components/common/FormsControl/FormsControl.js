import React from "react";
import { Form } from "react-bootstrap";
export const createFiledGroup = (
  id,
  label,
  type,
  placeholder,
  isRequired = false,
  grpType = null
) => {
  return (
    <>
      {grpType ? (
        <Form.Group as={grpType} controlId={id}>
          {formLableControl(label, type, placeholder, isRequired)}
        </Form.Group>
      ) : (
        <Form.Group controlId={id}>
          {formLableControl(label, type, placeholder, isRequired)}
        </Form.Group>
      )}
    </>
  );
};

const formLableControl = (label, type, placeholder, isRequired) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        required={isRequired}
      ></Form.Control>
    </>
  );
};

export const createFormSelect = (id, label, options) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        {options.map((op) => (
          <option>{op}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};
