import React, { useState } from "react";
import StudentList from "./components/StudentList";
import { StudentContext } from "./context/StudentContext";

const data = [
  {
    id: 1,
    name: "Harry Potter",
    email: "harry@mail.com",
    age: 14,
    color: "lightcyan",
  },
  {
    id: 2,
    name: "Draco Malfoy",
    email: "draco@mail.com",
    age: 13,
    color: "honeydew",
  },
  {
    id: 3,
    name: "Ron  Weasley",
    email: "ron@mail.com",
    age: 15,
    color: "mistyrose",
  },
];

const App = () => {
  const [students, SetStudents] = useState(data);

  const changeColor = (id, color) => {
    SetStudents(
      students.map((student) =>
        student.id === id ? { ...student, color: color } : student
      )
    );
  };

  return (
    <StudentContext.Provider value={{changeColor, students}}>
      <div className="App">
        <header>
          <h1>Welcome</h1>
        </header>
        <StudentList />
      </div>
    </StudentContext.Provider>
  );
};
export default App;
