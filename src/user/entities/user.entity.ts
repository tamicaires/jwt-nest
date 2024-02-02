import { UserType } from "../enum/user-type.enum";

export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  role: UserType;
}