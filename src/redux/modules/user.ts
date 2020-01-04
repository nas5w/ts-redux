import { typedAction } from "../helpers";

export type UserState = { username: string | null };

const initialState: UserState = { username: null };

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
      return { username: action.payload };
    case "user/LOGOUT":
      return { username: null };
    default:
      return state;
  }
}
