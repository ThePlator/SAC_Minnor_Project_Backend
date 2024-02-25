const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    timestamp: { type: Date },
    username: { type: String },
    name: { type: String },
    department: { type: String },
    registrationNumber: { type: String },
    rollNumber: { type: String },
    linkedinProfile: { type: String },
    resume: { type: String },
    internshipOrganization: { type: String },
    matriculationBoard: { type: String },
    matriculationPassingYear: { type: Number},
    matriculationPercentage: { type: String },
    intermediateBoard: { type: String },
    intermediatePassingYear: { type: Number },
    intermediatePercentage: { type: Number}
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
