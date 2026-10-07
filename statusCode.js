const express = require("express");

const app = express();
const PORT = 3000;


// 200 OK

app.get("/200", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Request successful"
    });

});


// 201 Created

app.post("/201", (req, res) => {

    res.status(201).json({
        success: true,
        message: "User created successfully"
    });

});


// 204 No Content

app.delete("/204", (req, res) => {

    res.status(204).send();

});


// 400 Bad Request

app.get("/400", (req, res) => {

    res.status(400).json({
        success: false,
        message: "Bad request"
    });

});


// 401 Unauthorized

app.get("/401", (req, res) => {

    res.status(401).json({
        success: false,
        message: "Authentication required"
    });

});


// 403 Forbidden

app.get("/403", (req, res) => {

    res.status(403).json({
        success: false,
        message: "You don't have permission"
    });

});


// 404 Not Found

app.get("/404", (req, res) => {

    res.status(404).json({
        success: false,
        message: "Resource not found"
    });

});


// 409 Conflict

app.get("/409", (req, res) => {

    res.status(409).json({
        success: false,
        message: "Resource already exists"
    });

});


// 422 Validation Error

app.get("/422", (req, res) => {

    res.status(422).json({
        success: false,
        message: "Validation failed"
    });

});


// 429 Too Many Requests

app.get("/429", (req, res) => {

    res.status(429).json({
        success: false,
        message: "Too many requests"
    });

});


// 500 Internal Server Error

app.get("/500", (req, res, next) => {

    const error = new Error("Something went wrong");

    error.status = 500;

    next(error);

});


// 503 Service Unavailable

app.get("/503", (req, res) => {

    res.status(503).json({
        success: false,
        message: "Service temporarily unavailable"
    });

});


// Error Handler for 500

app.use((err, req, res, next) => {

    console.error(err.message);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });

});



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});