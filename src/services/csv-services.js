const csv = require('csv-parser');
const fs = require('fs');
const { Students } = require('../models/index');

async function parseCsvFile(filePath) {
    const students = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', async (row) => {
                const student = {
                    name: row.Name,
                    email: row.Username,
                    department: row.Department,
                    registrationNumber: row['Registration Number'],
                    rollNumber: row['Roll Number'],
                    linkedinProfile: row['Linkedin Profile Link'],
                    resume: row.Resume,
                    internshipOrganization: row['Internship organization'],
                    matriculationBoard: row['Name of Matriculation Board'],
                    matriculationPassingYear: row['Matriculation Passing Year'],
                    matriculationPercentage: row['Percentage/CGPA in Matriculation'],
                    intermediateBoard: row['Name of Intermediate Board/Diploma College'],
                    intermediatePercentage: row['Percentage/CGPA in  Intermediate Board/Diploma College'],
                    intermediatePassingYear: row['Intermediate/Diploma Passing Year'],
                    achievement: row['Achievements and remarks (from any field and duration).']
                };
                students.push(student);
            })
            .on('end', async () => {
                try {
                    const createdStudents = await Students.bulkCreate(students);
                    resolve(createdStudents);
                } catch (error) {
                    reject(error);
                }
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

module.exports = {
    parseCsvFile
};
