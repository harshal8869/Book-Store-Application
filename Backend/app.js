const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router)


 
mongoose.connect("mongodb+srv://harshalshah:7vIsj1nl5t882RRl@book-store-app.0pryjmf.mongodb.net/bookstore?retryWrites=true&w=majority")
    .then(() => console.log("Connected to database")).then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));