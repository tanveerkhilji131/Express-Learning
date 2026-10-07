const express = require("express");

const app = express();
const PORT = 3000;



app.get("/users", (req, res, next) => {

    const error = new Error("Users data nahi mila");

    error.status = 404;

    next(error);

});




app.use((err, req, res, next) => {

    console.error("ERROR:", err.message);

    const statusCode = err.status || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });

});



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});