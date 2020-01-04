import React, { useState, useEffect } from "react";
import { RootState } from "./redux";
import { connect } from "react-redux";
import { User } from "./redux/modules/users";
import {
  createUser,
  deleteUser,
  clearUsers,
  loadUsers
} from "./redux/modules/users";
import { Dispatch, bindActionCreators } from "redux";

const mapStateToProps = (state: RootState) => ({
  users: state.users.users
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      createUser,
      deleteUser,
      clearUsers,
      loadUsers
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const App: React.FC<Props> = ({
  users,
  createUser,
  deleteUser,
  clearUsers,
  loadUsers
}) => {
  const [newUser, setNewUser] = useState({} as User);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const setProp = <P extends keyof User>(prop: P, value: User[P]) => {
    setNewUser(user => ({ ...user, [prop]: value }));
  };

  const addUser = (e: React.MouseEvent) => {
    e.preventDefault();
    const id =
      users.reduce((acc, user) => (user.id > acc ? user.id : acc), 0) + 1;
    createUser({ ...newUser, id });
    setNewUser({} as User);
  };

  return (
    <>
      <h1>User Management</h1>
      <h2>Existing Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.id}, {user.name}, {user.email}, {user.age},{" "}
            {user.admin ? "admin" : "regular user"}
            <button onClick={() => deleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearUsers}>Clear All Users</button>
      <h2>Add User</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={newUser.name || ""}
          onChange={e => setProp("name", e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={newUser.email || ""}
          onChange={e => setProp("email", e.target.value)}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={newUser.age || ""}
          onChange={e => setProp("age", Number(e.target.value))}
        />
        <br />
        <input
          type="checkbox"
          id="admin"
          onChange={() => setProp("admin", !newUser.admin)}
          checked={!!newUser.admin}
        />
        <label htmlFor="admin">Admin?</label>
        <br />
        <button type="submit" onClick={addUser}>
          Add User
        </button>
      </form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
