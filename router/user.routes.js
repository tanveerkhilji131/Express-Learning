const express = require("express");

const router = express.Router();



router.get("/", (req, res) => {

    res.json({
        success: true,
        message: "All users"
    });

});


router.get("/:id", (req, res) => {

    const id = req.params.id;

    res.json({
        success: true,
        message: "Single user",
        userId: id
    });

});




router.post("/", (req, res) => {

    const user = req.body;

    res.status(201).json({
        success: true,
        message: "User created",
        user: user
    });

});


module.exports = router;