const express = require("express");

const app = express();
const PORT = 3000;


function usersMiddleware(req, res, next) {

    console.log("Users middleware executed");

    next();
}


// Sirf /users se start hone wali routes par chalega
app.use("/api/users", usersMiddleware);


app.get("/api/users", (req, res) => {

    res.json({
        message: "Users list"
    });

});

app.get("/api/users/10", (req, res) => {

    res.json({
        message: "Single user"
    });

});

app.get("/api/products", (req, res) => {

    res.json({
        message: "Products"
    });

});



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});