const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const app = express();
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect("link")
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
        seats: [
            [Number], //A
            [Number], //B
            [Number], //C
            [Number], //D
            [Number], //E
            [Number], //F
            [Number], //G
            [Number], //H
        ],
        reservedSeats: [
            [Number], //A
            [Number], //B
            [Number], //C
            [Number], //D
            [Number], //E
            [Number], //F
            [Number], //G
            [Number], //H
        ],
    }],
    overview: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const Movie = mongoose.model("Movie", movieSchema);
Movie.init().then(() => {
    // safe to create users now.
});

//update- reserve seats
async function updateCourse(id, hour, reserveSeats, reservedSeatsIndex) {
    let error = false;
    const movie = await Movie.findById(id);
    if (!movie) return;
    const result = movie.hours.find(elem => {
        if (elem.hour === hour) {
            return elem
        }
    })
    let seats = result.seats.filter((el) => {
        return reserveSeats.indexOf(el) === -1;
    });
    result.seats = seats
    await reserveSeats.forEach(elem => {
        if (result.reservedSeats.indexOf(elem) !== -1) {
            error = true;
            return
        } else {
            result.reservedSeats.push(elem)
        }
    })
    if (error === false) {
        const updatedMovie = await movie.save()
        console.log(updatedMovie)
    } else {
        console.log("seats are taken please choose another")
    }
}

//const reservedSeats = [5, 4, 6]
//updateCourse("5e138e257e7187552ceb61c6", 21, reservedSeats)

//expressRoute

app.get("/", (req, res) => {
    res.send("Hello World")
})
app.get("/api/movies", async (req, res) => {
    const movies = await Movie.find().sort("name");
    res.send(movies)
})
app.get("/api/movies/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
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

    const movie = new Movie({
        name: req.body.name,
        hours: await req.body.hoursArray.map(element => {
            return ({
                hour: element,
                seats: [
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                ],
                reservedSeats: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            })
        }),
        overview: req.body.overview
    })
    await movie.save()
    res.send(movie)
})

app.put("/api/movies/:id", async (req, res) => {
    let error = false;
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
        return
    }
    const result = movie.hours.find(elem => {
        if (elem.hour === req.params.hour) {
            return elem
        }
    })
    let seats = result.seats.filter((el) => {
        return req.params.reserveSeats.indexOf(el) === -1;
    });
    result.seats = seats
    await req.params.id.reserveSeats.forEach(elem => {
        if (result.reservedSeats.indexOf(elem) !== -1) {
            error = true;
            return
        } else {
            result.reservedSeats.push(elem)
        }
    })
    if (error === false) {
        const updatedMovie = await movie.save()
        res.send(updatedMovie)
    } else {
        console.log("seats are taken please choose another")
    }

})
app.delete("/api/movies/:id", async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) {
        res.status(404).send("The movie with the given Id ws not found")
        return
    }
    res.send(movie)
});
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port...")
})
/*
//helper functions - delete later

// get Movies- wyświetla wszystkie filmy
async function getMovies() {
    const movies = await Movie.find();
    console.log(movies)
}
//getMovies() 
//get movie by Name - wyświetla film znaleziony po imieniu 
async function getMoviesNames(name) {
    const movies = await Movie
        .find({
            name: name
        });
    console.log(movies)
}
//getMoviesNames()
*/