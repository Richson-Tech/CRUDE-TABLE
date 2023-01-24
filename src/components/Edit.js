import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employess";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [Ratings, setRatings] = useState("");
  const [Summary, setSummary] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  let index = Employees.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Ratings = Ratings;
    a.Summary = Summary;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setRatings(localStorage.getItem("Ratings"));
    setSummary(localStorage.getItem("Summary"));
    setId(localStorage.getItem("Id"));
  }, []);
  return (
    <div>
      <form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlid="formRatings">
          <Form.Control
            type="text"
            placeholder="Enter Rating"
            value={Ratings}
            required
            onChange={(e) => setRatings(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlid="formSummary">
          <Form.Control
            type="text"
            placeholder="Enter Summary"
            value={Summary}
            required
            onChange={(e) => setSummary(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </form>
    </div>
  );
}

export default Edit;
