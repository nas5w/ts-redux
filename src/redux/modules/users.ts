import { typedAction } from "../helpers";
import { Dispatch, AnyAction } from "redux";
import { sampleUsers } from "../../data/sampleUsers";
import { RootState } from "..";

export type User = {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  age: number;
};

export type UserState = {
  users: User[];
};

const initialState: UserState = { users: [] };

export const createUser = (user: User) => {
  return typedAction("users/CREATE_USER", user);
};

export const clearUsers = () => {
  return typedAction("users/CLEAR_USERS");
};

export const deleteUser = (user: User) => {
  return typedAction("users/DELETE_USER", user);
};

const setUsers = (users: User[]) => {
  return typedAction("users/SET_USERS", users);
};

export const loadUsers = () => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    setTimeout(() => {
      dispatch(setUsers([...getState().users.users, ...sampleUsers]));
    }, 500);
  };
};

type UserAction = ReturnType<
  typeof createUser | typeof clearUsers | typeof deleteUser | typeof setUsers
>;

export function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case "users/CREATE_USER":
      return { users: [...state.users, action.payload] };
    case "users/CLEAR_USERS":
      return { users: [] };
    case "users/DELETE_USER":
      return {
        users: state.users.filter(user => user.id !== action.payload.id)
      };
    case "users/SET_USERS":
      return { users: action.payload };
    default:
      return state;
  }
}
