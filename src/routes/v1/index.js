// routes/api/students.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const StudentController = require('../../controllers/studentController');
const csvService = require('../../services/csvService'); // Import csvService

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
        const data = await csvService.parseCsvFile(filePath);
        // Process the data (e.g., save to database)
        res.json({ message: 'File uploaded and processed successfully', data });
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.delete('/students/:id', StudentController.destroy);
router.get('/students/:id', StudentController.get);

module.exports = router;
