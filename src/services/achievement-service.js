const AchievementRepository = require('../repository/achievement-repository');

class AchievementService {
    constructor() {
        this.achievementRepository = new AchievementRepository();
    }

    async getAchievement(id) {
        try {
            const achievement = await this.achievementRepository.getAchievement(id);
            return achievement;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async getAllAchievements() {
        try {
            const achievements = await this.achievementRepository.getAllAchievements();
            return achievements;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
}

module.exports = AchievementService;
