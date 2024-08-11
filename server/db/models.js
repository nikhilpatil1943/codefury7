import mongoose from 'mongoose';

// Alert Schema
const alertSchema = new mongoose.Schema({
    alertType: {
        type: String,
        enum: ['red', 'orange', 'yellow'],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
});

const Alert = mongoose.model('Alert', alertSchema);

// Test Schema
const testSchema = new mongoose.Schema({
    questions: [
        {
            question: {
                type: String,
                required: true,
            },
            options: {
                type: [String],
                required: true,
            },
            correctOption: {
                type: Number,
                required: true,
            },
        },
    ],
});

const Test = mongoose.model('Test', testSchema);

export { Alert, Test };
