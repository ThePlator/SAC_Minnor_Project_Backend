const AchievementService = require('../services/achievement-service');

const achievementService = new AchievementService();

const get = async (req, res) => {
    try {
        const achievement = await achievementService.getAchievement(req.params.id);
        return res.status(200).json({
            data: achievement,
            success: true,
            message: 'Successfully fetched the achievement',
            error: null
        });
    } catch (error) {
        console.error("Something went wrong in the controller layer");
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch the achievement',
            error: error.message
        });
    }
};

const getAll = async (req, res) => {
    try {
        const achievements = await achievementService.getAllAchievements(req.query);
        return res.status(200).json({
            data: achievements,
            success: true,
            message: 'Successfully fetched all achievements',
            error: null
        });
    } catch (error) {
        console.error("Something went wrong in the controller layer");
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to fetch all achievements',
            error: error.message
        });
    }
};

module.exports = {
    get,
    getAll
};
