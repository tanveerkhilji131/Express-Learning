const express = require("express");

const app = express();
const PORT = 3000;


// JSON middleware
app.use(express.json());




const userRouter = require("./router/user.routes");

app.use("/api/users", userRouter);



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});