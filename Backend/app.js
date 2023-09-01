const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://0.0.0.0:27017/restaurantDB").then(() => {
    console.log("connected to database!");
});

const userSchema = {
    name: String,
    email: String,
    password: String
};
const foodSchema = {
    name: String,
    id: Number,
    prize: String,
    img: String
};

const User = mongoose.model("User", userSchema);

const Food = mongoose.model("Food", foodSchema);

// const food = new Food(
//     {name: "Ice cream",
//     id: 9, 
//     prize: '$7',
//     img: "https://img.freepik.com/premium-photo/chocolate-vanilla-strawberry-ice-cream-isolated-white_807701-3441.jpg?size=626&ext=jpg&ga=GA1.2.1512689358.1683527575&semt=ais"
//     }	
// );

// food.save();
app.post("/getUser", function (req,res) {

    async function findUser() {
        const user = await User.findOne({email: req.body.email});
        if (user) {
            if (user.password === req.body.password) {
                res.status(200);
                res.send({success: true});
            } else {
                res.status(200).send({message: "Wrong Password"});
            }
        } else {
            res.status(200).send({message: "Sorry can't find user"});
        }
    }

    findUser();
});

app.post("/registerUser", function (req,res) {

    async function validateUser() {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
        
            user.save();
            res.status(200);
            res.send({success: true});

        } else if (user) {
            res.status(200).send({message: "User already exists"});
        }
    }

    validateUser();
});

app.get("/getMenu", function(req,res) {

    async function findMenudata() {
        const menu = await Food.find();
        res.send(menu);
    }
    
    findMenudata();
});

app.listen(3000, function () {
    console.log("server started at 3000");
});
 