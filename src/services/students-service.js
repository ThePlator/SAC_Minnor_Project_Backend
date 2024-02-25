// services/studentService.js

const StudentRepository = require('../repository/student-repository');



class StudentService {
    constructor() {
        this.studentRepository = new StudentRepository();
    }


    async getStudent(id) {
        try {
            const student = await this.studentRepository.getStudent(id);
            return student;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    
    async getAllStudents(data) {
        try {
            const students = await this.studentRepository.getAllStudents(data);
            return students;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    
}

module.exports = StudentService;
