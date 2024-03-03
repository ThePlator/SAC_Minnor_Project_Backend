// routes/api/students.js

const express = require('express');
const router = express.Router();

const StudentController = require('../../controllers/student-controller');
const AchievementController = require('../../controllers/achievement-controller')



router.get('/students', StudentController.getAll);
router.get('/students/:id', StudentController.get);

router.get('/achievement', AchievementController.getAll);
router.get('/achievement/:id', AchievementController.get);

module.exports = router;
