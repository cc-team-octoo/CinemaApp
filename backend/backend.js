const Joi = require("joi");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const express = require("express");
const app = express();

require('dotenv/config');

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

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

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/api/movies", async (req, res) => {
    const movies = await Movie.find().sort("name");
    res.send(movies)
    //search by ID or by Name 
})
/*
app.get("/api/movies/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
        return
    }
    res.send(movie)
});*/
app.get("/api/movies/:name", async (req, res) => {
    const movie = await Movie.find({
        name: req.params.name
    });
    if (!movie) {
        res.status(404).send("The movie with the given name was not found")
        return
    }
    res.send(movie)
});



app.post('/api/movies', async (req, res) => {
    console.log(req.body)
    const schema = {
        name: Joi.string().required(),
        overview: Joi.string(),
        hoursArray: Joi.array(),
    }
    const result = Joi.validate(req.body, schema)
    console.log(result.error)
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }
    const result2 = await Movie.findOne({
        name: req.body.name
    }).select("name").lean();
    if (result2) {
        res.status(404)
        return
    }

    const movie = new Movie({

        name: req.body.name,
        hours: await req.body.hoursArray.map(element => {
            return ({
                hour: element,
                reservedSeats: [],
            })
        }),
        overview: req.body.overview
    })
    await movie.save()
    res.send(movie)
})

app.put("/api/movies/:name", async (req, res) => {
    const movie = await Movie.find({
        name: req.params.name
    });
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
        return
    }
    const result = movie.hours.find(elem => {
        if (elem.hour === req.body.hour) {
            return elem
        }
    })
    console.log(result, req.body.seatsToReserve)

    req.body.seatsToReserve.forEach((elem) => {
        if (result.reservedSeats.indexOf(elem) === -1) {
            result.reservedSeats.push(elem)
        }

    })
    console.log(result.reservedSeats)

    const updatedMovie = await movie.save()
    console.log(updatedMovie)
})

app.delete("/api/movies/:id", async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
        return
    }
    res.send(movie)
});
app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port...")
})