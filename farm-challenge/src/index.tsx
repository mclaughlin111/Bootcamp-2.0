import React from "react";
import ReactDOM from "react-dom/client";
import { AnimalPage } from "./AnimalPage";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = "http://localhost:4000/";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<AnimalPage />);
