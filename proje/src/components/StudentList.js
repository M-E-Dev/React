import StudentItem from "./StudentItem"

const StudentList = ({ students, changeColor }) => {

    return (
        <div >
            <h1>Student List</h1>
            {students.map((student) => (
                <StudentItem key={student.name} student={student} changeColor={changeColor} />
            ))}
        </div>

    );
}
export default StudentList;
