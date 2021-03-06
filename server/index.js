import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = require("express");

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extend: true}));
app.use(cors);

const CONNECTION_URL = 'mongodb+srv://memory-book:<>@cluster0.f8j51.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
