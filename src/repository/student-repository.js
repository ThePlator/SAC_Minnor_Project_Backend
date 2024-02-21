// repositories/studentRepository.js

const { Student } = require('../models/index');

class StudentRepository {
    async getStudent(studentId) {
        try {
            const student = await Student.findByPk(studentId);
            return student;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteStudentById(studentId) {
        try {
            const result = await Student.destroy({ where: { id: studentId } });
            return result > 0 ? { message: 'Student deleted successfully' } : { message: 'Student not found' };
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    

    async bulkCreateStudents(students) {
        try {
            const createdStudents = await Student.bulkCreate(students);
            return createdStudents;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = StudentRepository;
