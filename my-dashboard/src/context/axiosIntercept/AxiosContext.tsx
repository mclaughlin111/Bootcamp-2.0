import axios, { AxiosInstance, HttpStatusCode } from "axios";
import { createContext, PropsWithChildren } from "react";
import { useAuthContext } from "../useAuthContext";
import { useNavigate } from "react-router-dom";

export const AxiosContext = createContext<AxiosInstance | undefined>(undefined);

export const AxiosProvider = ({ children }: PropsWithChildren) => {
  const { token, setLogin, setUser } = useAuthContext();
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000/accounts",
  });

  // why config parameter name passed in?
  axiosInstance.interceptors.request.use((config) => {
    if (token) {
      console.log("token is ", token);
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === HttpStatusCode.Unauthorized) {
        console.log("token intercept handled");
        setUser(null); // ok to be setting use to null as a way of logging out?
        setLogin(false); // is this login "marker" necessary?
        alert(
          "Insufficient user access, please login again to retrieve content"
        );
        navigate("/login");
      }

      return Promise.reject(error.response);
    }
  );

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};
