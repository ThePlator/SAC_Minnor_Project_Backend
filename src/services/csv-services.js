// services/csvService.js

const fs = require('fs');
const csv = require('csv-parser');

class CsvService {
    async parseCsvFile(filePath) {
        return new Promise((resolve, reject) => {
            const data = [];
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (row) => {
                    data.push({
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
                .on('end', () => {
                    resolve(data);
                })
                .on('error', (error) => {
                    reject(error);
                });
        });
    }
}

module.exports = new CsvService();
