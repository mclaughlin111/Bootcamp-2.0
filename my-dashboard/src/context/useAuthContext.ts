import { useContext, useState } from "react";
import { AuthContext } from "./AuthContextProvider";
import { useNavigate } from "react-router-dom";
import axios, { AxiosInstance, HttpStatusCode } from "axios";

// Duncan's Own Hook for using Auth Context
export const useAuthContext = () => {
  console.log("use Auth Context called");

  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error("This code should be wrappered in a AuthProvider");
  }

  return authContext;
};
