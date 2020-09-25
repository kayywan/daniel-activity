const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dessertSchema = new Schema ({
    dessert: String,
})

const dessert = mongoose.model("dessert", dessertSchema);

module.exports = dessert;