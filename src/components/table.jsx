import React from "react";
import { TestContext } from "../App";

export default function Table(props) {
  // console.log(TestContext);
  return (
    <div className="col-9">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((value, key) => {
            return <DataTable data={value} key={value.id} stt={key} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export function DataTable(props) {
  let user = props.data;
  return (
    <tr>
      <th>{props.stt + 1}</th>
      <td>{props.data.name}</td>
      <td>{props.data.phone}</td>
      <td>{props.data.role === 1 ? "Admin" : props.data.role === 2 ? "Semi-Admin" : "User"}</td>
      <TestContext.Consumer>
        {({ editUser, deleteUser }) => {
          return (
            <td>
              <button type="button" className="btn btn-info text-light" onClick={() => editUser(user)}>
                Edit
              </button>
              <button type="button" className="btn btn-danger" onClick={() => deleteUser(user)}>
                Delete
              </button>
            </td>
          );
        }}
      </TestContext.Consumer>
    </tr>
  );
}
