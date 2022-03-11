const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "brand is required",
    },
    description: {
        type: String,
        required: false,
    }
});


module.exports = mongoose.model("Brand", brandSchema);