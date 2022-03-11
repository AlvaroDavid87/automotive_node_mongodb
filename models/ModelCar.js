const mongoose = require('mongoose')

const modelCarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "name is required",
    },
    description: {
        type: String,
        required: false,
    },
    color: [{
        rgb: {
            type: String,
            required:false
        },
        hex: {
            type: String,
            required:false
        }
    }]
});

//Export model
module.exports = mongoose.model('ModelCar', modelCarSchema);