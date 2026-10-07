const express = require("express");

const app = express();
const PORT = 3000;


// Middleware 1

function logger(req, res, next) {

    console.log("Logger middleware");

    next();
}



// Middleware 2


function checkUser(req, res, next) {

    console.log("Check user middleware");

    next();
}


app.get(
    "/profile",
    logger,
    checkUser,
    (req, res) => {

        res.json({
            message: "Profile page"
        });

    }
);


app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});