let express = require("express")
let app = express()

app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: "User found",
        id: id
    });
});

app.listen(4000)

// clnt req  GET /users/10 output output = 
// {
//         message: "User found",
//         id: 10
//     }