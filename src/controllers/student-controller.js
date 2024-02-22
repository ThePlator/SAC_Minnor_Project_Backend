const StudentService = require('../services/students-service');
const csvService = require('../services/csv-services');


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

const destroy = async (req, res) => {
    try {
        const result = await studentService.deleteStudentById(req.params.id);
        return res.status(200).json(result); // Return the result directly
    } catch (error) {
        console.error("Something went wrong in the controller layer");
        return res.status(500).json({
            success: false,
            message: 'Failed to delete the student',
            error: error.message
        });
    }
};


// controllers/student-controller.js
// controllers/student-controller.js


const bulkCreate = async (req, res) => {
    try {
        console.log('Request file:', req.file);
        if (!req.file || !req.file.path) {
            throw new Error('File path is missing');
        }
        const filePath = req.file.path;
        console.log('File path:', filePath);
        const csvData = await csvService.parseCsvFile(filePath);
        const studentData = csvData.slice(1); // Exclude header row
        await StudentController.bulkCreate(studentData);
        res.status(200).json({ message: 'File uploaded and processed successfully' });
    } catch (error) {
        console.error('Error creating students:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};







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
    destroy,
    bulkCreate,
    getAll
};
