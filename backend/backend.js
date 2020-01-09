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

function createArray() {
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
}


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


async function updateCourse(id, hour, seatsToReserve) {
    const movie = await Movie.findById(id);
    if (!movie) return;
    const result = await movie.hours.find(elem => {
        if (elem.hour === hour) {
            return elem
        }

    })
    console.log(result, seatsToReserve)

    seatsToReserve.forEach((elem) => {
        if (result.reservedSeats.indexOf(elem) === -1) {
            result.reservedSeats.push(elem)
        }

    })
    console.log(reservedSeats)

    const updatedMovie = await movie.save()
    console.log(updatedMovie)


}
const reservedSeats = ["1A", "1B", "8C"]


updateCourse("5e1783f9326607139e21c7f1", 10, reservedSeats)
*/