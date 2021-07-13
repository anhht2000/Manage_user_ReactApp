import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Table from "./components/table";
import AddForm from "./components/addForm";
import data from "./components/data.json";
import EditUser from "./components/EditUser";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TestContext = React.createContext();

function App() {
  const [dataNew, SetdataNew] = useState(data);
  const [dataSearch, SetdataSearch] = useState("");
  const [editIsshow, SeteditIsshow] = useState(false);
  const [dataUser, SetdataUser] = useState({});
  function handleChange(e) {
    SetdataSearch(e.target.value);
  }
  //tim kiem
  function checkSearch(search) {
    let kq = [];
    dataNew.forEach((value) => {
      if (value.name.toLowerCase().indexOf(search) !== -1) {
        kq.push(value);
      }
    });
    return kq;
  }
  //nhan data tu form add
  function addData(dl) {
    SetdataNew([
      ...dataNew,
      {
        ...dl, //object thieu id
        id: uuidv4(), //tu sinh id
      },
    ]);
  }
  // hanle edit btn
  function editUser(user) {
    console.log(user);
    SeteditIsshow(true);
    SetdataUser(user);
  }
  //handle delete btn
  function deleteUser(user) {
    console.log(user.id);
    dataNew.forEach((value, key) => {
      if (value.id === user.id) {
        SetdataNew([
          ...dataNew.filter((value, key) => {
            return value.id !== user.id;
          }),
        ]);
      }
    });
  }
  //handle an nut sua
  function editBtn(e, user) {
    e.preventDefault();
    SeteditIsshow(false);
    let a = dataNew.map((value, key) => {
      if (value.id === user.id) {
        return user;
      }
      return value;
    });
    SetdataNew([...a]);
  }
  //handle change edit
  function handleInput(e) {
    SetdataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <TestContext.Provider value={{ editUser, deleteUser }}>
      <div className="App">
        <Header />
        <Search handle={handleChange} />
        <EditUser editIsshow={editIsshow} dataUser={dataUser} funcEditbtn={editBtn} funcHandleChange={handleInput} />
        <div className="container">
          <div className="row">
            <Table data={checkSearch(dataSearch)} />
            <AddForm addData={addData} />
          </div>
        </div>
      </div>
    </TestContext.Provider>
  );
}

export default App;
