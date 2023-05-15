const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    langName: {
        type:String,
        required:[true, 'Please select a language to learn.'],
    },
    langLevel:{
        type:String,
        required:[true, 'Please select your current language level.'],
    },
    langProgress: {
        type: Number,
        required: [true, 'Please enter a number to display progress percentage.'],
    },
    langTutor:{
        type: String,
        required: [true, 'Please select a tutor from the list. Each tutor in the list corresponds to a language.'],
    },
    langDeadline:{
        type: Date,
        required: [true, 'Please select a date.'],
    },
    langWordsLearned:{
        type: Number,
        required: [true, "Please input a number."]
    },
    langReasontoLearn:{
        type:String,
        required: [true, "Please state a reason."],
        maxLength: [500, "Must not be more than 500 characters."]
    }
}, {timestamps:true})

module.exports = mongoose.model('Language', LanguageSchema);