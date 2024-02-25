// repositories/studentRepository.js

const Student = require('../models/students');

class StudentRepository {
    async getStudent(id) {
        try {
            const student = await Student.findById(id);
            return student;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    
    async  getAllStudents() {
        try {
            const students = await Student.find();
            return students;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

}

module.exports = StudentRepository;
