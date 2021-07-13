import React, { useEffect, useState } from "react";

export default function EditUser(props) {
  return (
    <div className="container">
      <div className={"card border-primary mb-3 mt-2 " + (props.editIsshow === true ? "" : "d-none")}>
        <div className="card-body text-dark">
          <h5 className="card-title text-success">Edit User</h5>
          <hr />
          {/* form  */}
          <form>
            <div className="form-floating mb-1">
              <input onChange={props.funcHandleChange} defaultValue={props.dataUser.name} name="name" type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-1">
              <input onChange={props.funcHandleChange} defaultValue={props.dataUser.phone} name="phone" type="text" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Phone</label>
            </div>
            <div>
              {/* {console.log(typeof props.dataUser.role)} */}
              <select onChange={props.funcHandleChange} value={props.dataUser.role} className="form-select" name="role">
                <option value="1">Admin</option>
                <option value="2">Semi-Admin</option>
                <option value="3">User</option>
              </select>
            </div>
            <button className="btn btn-success w-100 mt-2" type="submit" onClick={(e) => props.funcEditbtn(e, props.dataUser)}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
