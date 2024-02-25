const StudentService = require('../services/students-service');


const studentService = new StudentService();

const get = async (req, res) => {
    try {
        const student = await studentService.getStudent(req.params.id);
        return res.status(200).json({
            data: student,
            success: true,
            message: 'Successfully fetched the student',
            error: null
        });
    } catch (error) {
        console.error("Something went wrong in the controller layer");
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch the student',
            error: error.message
        });
    }
};



// controllers/student-controller.js
// controllers/student-controller.js



const getAll = async (req, res) => {
    try {
        const students = await studentService.getAllStudents(req.query);
        return res.status(200).json({
            data: students,
            success: true,
            message: 'Successfully fetched all students',
            error: null
        });
    } catch (error) {
        console.error("Something went wrong in the controller layer");
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch all students',
            error: error.message
        });
    }
};








module.exports = {
    get,
    
    getAll
};
