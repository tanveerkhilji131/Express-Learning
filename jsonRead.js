const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
    console.log(req.body);

    res.json({
        message: "User received",
        data: req.body
    });
});

app.listen(3000);