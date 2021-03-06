const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    instruction: {
        type: String,
        required: false,
        trim: true,
    },
    reminder: {
        type: String,
        required: false,
        trim: true,
    },
    showScale: {
        type:Boolean,
        required: false,
        default: false,
    },
    isFinalised: {
        type:Boolean,
        required: false,
        default: false,
    },
    exercices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercice',
    }],
    creationTime: {
        type: Date,
        default: () => Date.now(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        // ref: 'author', CF service Teamy
    },
    //TODO: When the teamy group will have usable routes, we need to passe the types of those two below to 'mongoose.Schema.Types.ObjectId' as they should be.
    group: {
        type: String,
        trim: true,
        // ref: 'Group', CF service Teamy,
        // gives us the group to assign the exam
    },
    session: {
        type: String,
        // ref: 'Session', CF service Teamy
        // gives us the dates
        trim: true,
    },
});

module.exports = mongoose.model('Exam', ExamSchema);
