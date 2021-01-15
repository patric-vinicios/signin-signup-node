const express = require('express');

const InitiateMongoServer = require('./config/db');
const user = require("./routes/user");

InitiateMongoServer();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})
