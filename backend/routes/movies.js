const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const router = express.Router();
const bodyParser = require('body-parser')
const Movie=require("../backend")
router.use(express.json())
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get("/", async (req, res) => {
    const movies = await Movie.find().sort("name");
    res.send(movies)
})

router.get("/:name", async (req, res) => {
    const movie = await Movie.find({
        name: req.params.name
    });
    if (!movie) {
        res.status(404).send("The movie with the given name was not found")
        return
    }
    res.send(movie)
});



router.post('/', async (req, res) => {
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

router.put("/:name", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
        return
    }
    res.send(movie)
});
/*
app.get("/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
        return
    }
    res.send(movie)
});*/
module.exports=router