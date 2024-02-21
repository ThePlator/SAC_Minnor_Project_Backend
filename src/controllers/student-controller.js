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

const bulkCreate = async (req, res) => {
    try {
        const filePath = req.file.path; // Assuming you are using multer for file upload
        await studentService.importStudentsFromCsv(filePath);
        return res.status(200).json({ message: 'Students imported successfully' });
    } catch (error) {
        console.error('Error importing students:', error);
        let status = 500;
        let message = 'Internal Server Error';
        if (error.code === 'E_FILE_FORMAT') {
            status = 400;
            message = 'Invalid file format. Please upload a CSV file.';
        }
        return res.status(status).json({ message });
    }
};

module.exports = {
    get,
    destroy,
    bulkCreate
};
