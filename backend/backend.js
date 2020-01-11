const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const app = express();
const bodyParser = require('body-parser')
const movies=require("./routes/movies")

const nodemailer = require('nodemailer')
const creds = require('./config/config');


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


app.get("/", (req, res) => {
    res.send("Hello World")
})




//nodemailer

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res, next) => {
    const email = req.body.email
    const message = req.body.message
  
    const mail = {
      from: creds.USER,
      to: email,  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
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

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port...")
})

exports.Movie = Movie
