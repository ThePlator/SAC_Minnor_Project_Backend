// repositories/studentRepository.js

const Students = require('../models/students');

class StudentRepository {
    async getStudent(id) {
        try {
            const student = await Students.findById(id);
            return student;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async  getAllStudents() {
        try {
            const students = await Students.find();
            return students;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

}



module.exports = StudentRepository;
