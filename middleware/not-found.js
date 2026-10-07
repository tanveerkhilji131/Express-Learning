const express = require("express");

const app = express();
const PORT = 3000;


// Existing Route

app.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Home page"
    });

});


// 404 Not Found Middleware

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});