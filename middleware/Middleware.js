const express = require("express");
const app = express();
const fs = require('fs')
app.use((req, res, next) => {
    req.userName = "tanveer khilji"
    if (req.originalUrl == '/users') {
        next()
    } else {
    return   res.end("Error")
    }
})
app.use((req, res) => {
    console.log(req.userName)
    res.send(`hello ${req.userName}`)
    fs.appendFile("./middle.txt",`user req is ${req.method} user path is ${req.path} and user ip=${req.ip}\n`,(err)=>{
        if(err){
          return  res.end("Error")
        }else{
         return   res.end("sucess")
        }
    })
})

app.listen(5000, () => console.log("server started port 5000"))