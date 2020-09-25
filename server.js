const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 8000

const order = require("./models/order.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/orderDB", { useNewUrlParser: true });

db.OrderUP.create({ name: "Here's My Meal" })
  .then(dbOrder => {
    console.log(dbOrder);
  })
  .catch(({message}) => {
    console.log(message);
  });


app.post("/submit", ({ body }, res) => {
  db.food.create(body)
      .then(({_id}) => db.OrderUP.findOneAndUpdate({}, { $push: { food: _id } }, { new: true }))
      .then(dbOrder => {
        res.json(dbOrder);
      })
    
});
   

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });