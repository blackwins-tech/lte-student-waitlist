/**
 * ? @description : App Component
 */

// Dependencies
import React from "react";

// CSS Component
import "./App.css";

// Components
import Title from "./components/title/Title";
import StudentModule from "./components/student-module/StudentModule";

function App() {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <Title />
      <StudentModule />
    </div>
  );
}

export default App;
