const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const app = express();
const bodyParser = require('body-parser')
const movies=require("./routes/movies")
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use("/api/movies", movies)
mongoose.connect("mongodb+srv://coderscamp:coderscamp123@movie-blnwm.gcp.mongodb.net/cinema?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to MongoDb...")
    })
    .catch((err) => {
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
    },
    hours: [{
        hour: Number,
        reservedSeats: [],
    }],
    overview: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const Movie = mongoose.model("Movie", movieSchema);
Movie.init().then(() => {});


//expressRoute

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port...")
})



/*function createArray() {
    const seats = []
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
    rows.forEach((row) => {
        console.log(row)
        for (let i = 1; i <= 10; i++) {
            console.log(row)
            seats.push(`${i}${row}`)
        }
    })
    return seats
}*/

exports.Movie = Movie
