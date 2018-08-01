const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const mongoose = require('mongoose');
const path = require('path');







mongoose.connect('mongodb://localhost:27017/users');


























const app = express();

// using bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// Static Fils
app.use(express.static(path.join(__dirname, 'public')));
// EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const users = [{
        name: "Jhon",
        age: 19
    },
    {
        name: "pedro",
        age: 25
    },
    {
        name: 'khalile',
        age: 13
    }
]


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.post('/users/add', function (req, res) {
    let newUser = {
        fistName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email
    }
    console.log(newUser);
});

app.listen(3000, () => console.log('server started at port 3000...'));