import React from "react";
import s from "./RatingTable.module.css";
import { Button, Form, Table, Col } from "react-bootstrap";
import { createFiledGroup } from "../common/FormsControl/FormsControl";
const RatingTable = ({ ratingItems, handleSubmit }) => {
  return (
    <div className={s.wrapContainer}>
      <div className={"title"}>Rating Table</div>
      <div className={s.container}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Amount of vacancies</th>
              <th>Amount of responds</th>
            </tr>
          </thead>
          <tbody>
            {ratingItems
              .sort((a, b) => b["vacancies"] - a["vacancies"])
              .sort((a, b) => b["responds"] - a["responds"])
              .map((item, i) => (
                <RatingItem key={i} i={i} ratingItem={item} />
              ))}
          </tbody>
        </Table>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            {createFiledGroup(
              "vacancies",
              "Amount of vacancies",
              "text",
              "Enter amount of vacancies",
              false,
              Col
            )}
            {createFiledGroup(
              "responds",
              "Amount of responds",
              "text",
              "Enter amount of responds",
              false,
              Col
            )}
          </Form.Row>
          <Button variant="dark" type="submit">
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
};

const RatingItem = ({ i, ratingItem }) => {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{ratingItem.company}</td>
      <td>{ratingItem.vacancies}</td>
      <td>{ratingItem.responds}</td>
    </tr>
  );
};

export default RatingTable;
