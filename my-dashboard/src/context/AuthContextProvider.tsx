import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { User } from "./User";

type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  token?: string;
  setToken: (token: string) => void;
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, login, setLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
