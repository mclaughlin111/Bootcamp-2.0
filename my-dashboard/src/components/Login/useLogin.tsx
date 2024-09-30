import { useState } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { User } from "../../context/User";
import { useAuthContext } from "../../context/useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);
  const { setUser, setToken, token, setLogin } = useAuthContext();
  // const [token, setToken] = useState<string | null>(null);

  // Login API Call Function
  const handleLogin = async (password: string, email: string) => {
    setIsLoading(true);
    console.log(password + email);

    try {
      const loginRequest = await axios.post("/accounts/login", {
        email,
        password,
      });

      const signedUser = decodeToken<User>(loginRequest.data.token);
      setToken(loginRequest.data.token);
      setUser(signedUser);
      setLogin(true);

      if (signedUser !== null) {
        setWarning(null);
      }
    } catch (requestError) {
      setWarning("Password Invalid, Please try again" + requestError);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(token);

  return {
    handleLogin,
    isLoading,
    warning,
  };
};
