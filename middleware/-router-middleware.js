const express = require("express");

const router = express.Router();




router.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Users data",
        user: req.user
    });

});


module.exports = router;