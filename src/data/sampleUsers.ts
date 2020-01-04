import { User } from "../redux/modules/users";

export const sampleUsers: User[] = [
  {
    id: 1,
    name: "Jerry",
    age: 22,
    admin: false,
    email: "jerry@example.com"
  },
  {
    id: 2,
    name: "Jane",
    age: 28,
    admin: true,
    email: "jane@example.com"
  }
];
