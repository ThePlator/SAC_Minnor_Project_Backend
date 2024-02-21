const fs = require('fs');
const csv = require('csv-parser');
const { Student } = require('../models/index');

async function importStudents() {
    const students = [];
    fs.createReadStream('../Untitledform.csv')
        .pipe(csv())
        .on('data', (row) => {
            students.push({
                name: row['Name'],
                department: row['Department'],
                registration_number: row['Registration Number'],
                roll_number: row['Roll Number'],
                linkedin_profile: row['Linkedin Profile Link'],
                resume_link: row['Resume'],
                internship_place: row['Internship organization'],
                matriculation_passing_year: row['Matriculation Passing Year'],
                matriculation_percentage: row['Percentage/CGPA in Matriculation'],
                matriculation_board: row['Name of Matriculation Board'],
                intermediate_passing_year: row['Intermediate/Diploma Passing Year'],
                intermediate_percentage: row['Percentage/CGPA in Intermediate Board/Diploma College'],
                intermediate_board: row['Name of Intermediate Board/Diploma College'],
                achievement: row['Achievements and remarks (from any field and duration).'],
            });
        })
        .on('end', async () => {
            await Student.bulkCreate(students);
            console.log('Imported students successfully');
        });
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await importStudents();
    },

    down: async (queryInterface, Sequelize) => {
        // You can add commands to revert the seed here if needed
    }
};
