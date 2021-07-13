import React, { useState } from "react";

export default function AddForm(props) {
  const [isShow, SetisShow] = useState(false);
  const [info, Setinfo] = useState({
    name: "",
    phone: "",
    role: 3,
  });
  function handleChange(e) {
    SetisShow(!isShow);
  }
  function handleInput(e) {
    Setinfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    // console.log(info)
  }
  //button
  function handleButton(e) {
    e.preventDefault();
    props.addData(info);
    resetForm();
  }
  //reset form
  function resetForm() {
    Setinfo({
      name: "",
      phone: "",
      role: 3,
    });
  }
  return (
    <div className="col-3">
      {/* {console.log(info)} */}
      <button onClick={handleChange} className={isShow === false ? "btn btn-primary w-100" : "btn btn-primary w-100 d-none"} type="button">
        Add User
      </button>
      <button onClick={handleChange} className={isShow === false ? "btn btn-secondary w-100 mt-2 d-none" : "btn btn-secondary w-100 mt-2"} type="button">
        Close Tab
      </button>
      <div className={"card border-primary mb-3 mt-2 " + (isShow === false ? "d-none" : "")} style={{ maxWidth: "18rem" }}>
        <div className="card-body text-dark">
          <h5 className="card-title text-success">Add User</h5>
          <hr />
          {/* form  */}
          <form>
            <div className="form-floating mb-1">
              <input value={info.name} onChange={handleInput} name="name" type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-1">
              <input value={info.phone} onChange={handleInput} name="phone" type="text" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Phone</label>
            </div>
            <div>
              {/* <input type="text" className="form-control" id="floatingRole" placeholder="Role" />
                            <label htmlFor="floatingRole">Role</label> */}
              <select value={info.role} className="form-select" name="role" onChange={handleInput}>
                <option value="1">Admin</option>
                <option value="2">Semi-Admin</option>
                <option value="3">User</option>
              </select>
            </div>
            <button className="btn btn-success w-100 mt-2" type="submit" onClick={handleButton}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
