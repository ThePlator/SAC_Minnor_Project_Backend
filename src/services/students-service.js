// services/studentService.js

const StudentRepository = require('../repository/student-repository');
const csvService = require('./csv-services');
const { Student } = require('../models/index');

class StudentService {
    constructor() {
        this.studentRepository = new StudentRepository();
    }

  
  async  bulkCreateStudents(filePath) {
    try {
        const students = await csvService.parseCsvFile(filePath);
        const createdStudents = await studentRepository.bulkCreateStudents(students);
        return createdStudents;
    } catch (error) {
        console.error('Error importing students from CSV:', error);
        throw error;
    }
}

    async getStudent(students) {
        try {
            const student = await this.studentRepository.getStudent(students);
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
