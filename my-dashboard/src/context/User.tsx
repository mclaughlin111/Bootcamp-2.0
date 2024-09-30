export type Access = "user" | "admin";

export type User = {
  access: Access;
  id: number;
  name: string;
  email: string;
  iat: number;
  exp: number;
};
