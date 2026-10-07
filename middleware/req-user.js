const express = require("express");

const app = express();
const PORT = 3000;


// Authentication Middleware

function authenticate(req, res, next) {

    // Demo user
    req.user = {
        id: 101,
        name: "Tanveer",
        role: "admin"
    };

    next();
}



app.get(
    "/profile",
    authenticate,
    (req, res) => {

        res.json({
            message: "Profile fetched",
            user: req.user
        });

    }
);



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});


