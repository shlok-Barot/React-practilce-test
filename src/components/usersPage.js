import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const addUser = () => {
    setUsers([...users, { id: uuidv4(), name }]);
    setName("");
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const removeAllUsers = () => {
    setUsers([]);
  };

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter User Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-success mb-2" onClick={addUser}>
        Add User
      </button>
      <button className="btn btn-danger mb-2" onClick={removeAllUsers}>
        Remove All Users
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
            <button
              className="btn btn-sm btn-danger float-end"
              onClick={() => removeUser(user.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
