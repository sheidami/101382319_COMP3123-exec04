var express = require("express")

const SERVER_PORT = 8089
var app = express()

app.get("/hello", (req, res) => {

    res.send("<h1>Hello Express JS</h1>")

})
app.get("/user", (req, res) => {

    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.json({ firstname, lastname });

})

app.post("/user/:firstname/:lastname", (req, res) => {
    
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json({firstname, lastname});
    
})

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})