import { typedAction } from "../helpers";

export type UserState =
  | {
      loggedIn: true;
      username: string;
    }
  | { loggedIn: false };

const initialState: UserState = { loggedIn: false };

const login = (username: string) => {
  return typedAction("user/LOGIN", username);
};

const logout = () => {
  return typedAction("user/LOGOUT");
};

type UserAction = ReturnType<typeof login | typeof logout>;

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "user/LOGIN":
      return { loggedIn: true, username: action.payload };
    case "user/LOGOUT":
      return { loggedIn: false };
    default:
      return state;
  }
}
