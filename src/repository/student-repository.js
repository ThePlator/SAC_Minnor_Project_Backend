// repositories/studentRepository.js

const { Students } = require('../models/index');

class StudentRepository {
    async getStudent(studentId) {
        try {
            const student = await Students.findByPk(studentId);
            return student;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteStudentById(studentId) {
        try {
            const result = await Students.destroy({ where: { id: studentId } });
            return result > 0 ? { message: 'Student deleted successfully' } : { message: 'Student not found' };
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    

    async bulkCreateStudents(students) {
        try {
            const createdStudents = await Students.bulkCreate(students);
            return createdStudents;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = StudentRepository;
