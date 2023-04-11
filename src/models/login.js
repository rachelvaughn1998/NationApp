const mongoose = require('mongoose')


const LogInSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
});

const LogInModel = mongoose.model("logins", LogInSchema)
module.exports = LogInModel; 
