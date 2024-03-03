const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    name: { type: String, required: true },
    branch: { type: String, required: true },
    batch: { type: String, required: true },
    photoLink: { type: String },
    achievement: { type: String, required: true },
    category: { type: String, required: true }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
