const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercise: [
        {
            name: {
                type: String,
                trim: true,
                required: "Please enter exercise name"
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
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
});

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout;