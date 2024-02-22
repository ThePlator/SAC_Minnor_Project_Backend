// routes/api/students.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const StudentController = require('../../controllers/student-controller');
const csvService = require('../../services/csv-services');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    },
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const filePath = req.file.path;
        console.log('File path:', filePath);
        const csvData = await csvService.parseCsvFile(filePath);
        
        // Assuming the CSV data has a header row and the student data starts from index 1
        const studentData = csvData.slice(1); // Exclude header row
        
        await StudentController.bulkCreate(studentData);
        res.json({ message: 'File uploaded and processed successfully' });
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.delete('/students/:id', StudentController.destroy);

router.get('/students', StudentController.getAll);
router.get('/students/:id', StudentController.get);

module.exports = router;
