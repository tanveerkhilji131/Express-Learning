const express = require("express");

const app = express();
const PORT = 3000;


// JSON middleware
app.use(express.json());


// ===============================
// Authentication Middleware
// ===============================

function authenticate(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {

        return res.status(401).json({
            success: false,
            message: "Please provide authorization"
        });

    }

    req.user = {
        id: 101,
        name: "Tanveer"
    };

    next();
}




const userRouter = require("./middleware/-router-middleware");

app.use(
    "/api/users",
    authenticate,
    userRouter
);


app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});