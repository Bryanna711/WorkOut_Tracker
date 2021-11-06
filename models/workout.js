const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Please enter your name"
    },
    type: {
        type: String,
        required: "Select a Workout Type"
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    durations: {
        type: Number,
    },
    distance: {
        type: Number,
    },
});

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout;