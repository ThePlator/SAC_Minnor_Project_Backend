'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
    
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      registration_number: {
        type: Sequelize.STRING
      },
      roll_number: {
        type: Sequelize.STRING
      },
      linkedin_profile: {
        type: Sequelize.STRING
      },
      resume_link: {
        type: Sequelize.STRING
      },
      internship_place: {
        type: Sequelize.STRING
      },
      matriculation_passing_year: {
        type: Sequelize.STRING
      },
      matriculation_percentage: {
        type: Sequelize.STRING
      },
      matriculation_board: {
        type: Sequelize.STRING
      },
      intermediate_passing_year: {
        type: Sequelize.STRING
      },
      intermediate_percentage: {
        type: Sequelize.STRING
      },
      intermediate_board: {
        type: Sequelize.STRING
      },
      achievement: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};
