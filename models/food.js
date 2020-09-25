const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema ({
    food: String,
})

const food = mongoose.model("food", foodSchema);

module.exports = food;