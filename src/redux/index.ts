import { combineReducers } from "redux";
import { userReducer } from "./modules/users";

export const rootReducer = combineReducers({ users: userReducer });

export type RootState = ReturnType<typeof rootReducer>;
