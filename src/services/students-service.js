// services/studentService.js

const StudentRepository = require('../repository/student-repository');
const csvService = require('./csvService');
const { Student } = require('../models/index');

class StudentService {
    constructor() {
        this.studentRepository = new StudentRepository();
    }

    async importStudentsFromCsv(filePath) {
        try {
            const students = await csvService.parseCsvFile(filePath);
            const createdStudents = await this.studentRepository.bulkCreateStudents(students);
            return createdStudents;
        } catch (error) {
            console.error('Error importing students from CSV:', error);
            throw error;
        }
    }

    async getStudent(studentId) {
        try {
            const student = await this.studentRepository.getStudent(studentId);
            return student;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async deleteStudentById(studentId) {
        try {
            const result = await this.studentRepository.deleteStudentById(studentId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}

module.exports = StudentService;
