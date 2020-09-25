const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const drinkSchema = new Schema ({
    drink: String,
})

const drink = mongoose.model("drink", drinkSchema);

module.exports = drink;