const Achievement = require('../models/achievement');

class AchievementRepository {
    async getAchievement(id) {
        try {
            const achievement = await Achievement.findById(id);
            return achievement;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllAchievements() {
        try {
            const achievements = await Achievement.find();
            return achievements;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = AchievementRepository;
