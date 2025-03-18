const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const students = await getAllStudents();
    res.status(200).json(students);

});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const studentData = req.body;
    const newStudent = await addNewStudent(studentData);
    res.status(201).json(newStudent);

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const studentId = req.params.id;
    const studentData = req.body;
    const updatedStudent = await updateStudent(studentId, studentData);
    res.status(200).json(updatedStudent);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const studentId = req.params.id;
    const student = await getStudentDetail(studentId);
    res.status(200).json(student);

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const studentId = req.params.id;
    const status = req.body.status;
    const updatedStudent = await setStudentStatus(studentId, status);
    res.status(200).json(updatedStudent);

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
