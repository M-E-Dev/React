import StudentItem from "./StudentItem"
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentList = () => {
    const {students} = useContext(StudentContext);

    return (
        <div >
            <h1>Student List</h1>
            {students.map((student) => (
                <StudentItem key={student.name} student={student} />
            ))}
        </div>

    );
}
export default StudentList;
