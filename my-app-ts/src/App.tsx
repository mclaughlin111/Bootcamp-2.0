import React from "react";
import logo from "./logo.svg";
import "./App.css";
import './utils/addTwoNumber';
import { addTwoNumbers } from "./utils/addTwoNumber";
import { EmployeeComponent } from "./v5-employee-task/solution/EmployeeBadge";
import { Employee } from "./v5-employee-task/Employee";

function App() {
  
  console.log(addTwoNumbers(4, 5));

const employee: Employee = {
  details: {
    firstName: "Tinky",
    lastName: "Winky",
  },
  email: "tiny.winky@teletubbies.com",
  imagePath: "tinky-winky.jpg",
  jobTitle: "Teletubby",
  team: "Client Servicing and Engagement",
  cohort: 12,
};

  return (
    <div className="App">

      <header className="App-header">
      <EmployeeComponent {...employee}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (TypeScript)
        </a>
      </header>
    </div>
  );
}

export default App;
