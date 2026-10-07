
const express = require("express");

const app = express();
const PORT = 3000;


function authenticate(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {

        return res.status(401).json({
            success: false,
            message: "Please login first"
        });

    }

    req.user = {
        id: 101,
        name: "Tanveer"
    };

    next();
}


app.get(
    "/profile",
    authenticate,
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome to profile",
            user: req.user
        });

    }
);



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});