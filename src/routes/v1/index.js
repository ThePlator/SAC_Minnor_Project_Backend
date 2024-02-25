// routes/api/students.js

const express = require('express');
const router = express.Router();

const StudentController = require('../../controllers/student-controller');




router.get('/students', StudentController.getAll);
router.get('/students/:id', StudentController.get);

module.exports = router;
