const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        age: { type: Number, required: true },
        class: { type: String, required: true },
        subjects: { type: [String], required: true },
        attendance: { type: Number, required: true },
        role: {
            type: String,
            enum: ['employee', 'admin', 'student'],
            default: 'student'
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    });
module.exports = mongoose.model('User', userSchema);

