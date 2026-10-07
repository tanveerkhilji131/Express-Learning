const express = require("express");

const app = express();
const PORT = 3000;


// Authentication

function authenticate(req, res, next) {

    req.user = {
        id: 101,
        name: "Tanveer",
        role: "admin"
    };

    next();
}


// Authorization


function isAdmin(req, res, next) {

    if (req.user.role !== "admin") {

        return res.status(403).json({
            success: false,
            message: "Admin access required"
        });

    }

    next();
}




app.get(
    "/admin",
    authenticate,
    isAdmin,
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Admin"
        });

    }
);



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});