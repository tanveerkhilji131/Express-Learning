const express = require("express");

const app = express();
const PORT = 3000;



// Normal Route


app.get("/error", (req, res, next) => {

    const error = new Error("Something went wrong");

    next(error);

});


// Error Handling Middleware


app.use((err, req, res, next) => {

    console.log("Error:", err.message);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

});




app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});