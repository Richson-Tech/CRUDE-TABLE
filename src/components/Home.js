import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employess";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, summary, ratings) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Summary", summary);
    localStorage.setItem("Ratings", ratings);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    let index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);

    history("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "18rem" }}>
        <Table striped borded hover size="sm">
          <thead>
            <tr>
              <th>Author's Name</th>
              <th>Summary</th>
              <th>Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Summary}</td>
                      <td>{item.Ratings}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.Name,
                                item.Ratings,
                                item.Summary
                              )
                            }
                          >
                            EDIT
                          </Button>
                          </Link>
                          &nbsp;
                          
                          <Button onClick={() => handleDelete(item.id)}>
                            DELETE
                          </Button>
                        
                      </td>
                    </tr>
                  );
                })
              : "No data Available"}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-2" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
