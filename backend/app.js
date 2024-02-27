require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

//port
const port = process.env.PORT


//mongoose stuff
const mongoose = require('mongoose');
const ShoppingList = require("./models/Habit");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.once("open", () => console.log("connected to mongoDB"));

//app.use
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())







app.listen(port, () => console.log(`Application is running on port ${port}`))