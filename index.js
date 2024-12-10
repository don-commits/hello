const express = require("express")
const connection = require("./db/connect")
const userRoute = require("./routes/userRoute")
const verifierRoute = require("./routes/verifierRoute")
require("dotenv").config()

const app = express()
var cors = require('cors')
app.use(cors())

app.use(express.json())
app.use('/user', userRoute)
app.use('/verifier', verifierRoute)
app.get("/", (req, res) => {
    res.json({message :"Hello from the backend"})
})

app.use((req, res) => {
    res.status(404).json({
        success: 0,
        message: "The API endpoint you are trying to access does not exist.",
    });
});


app.listen(process.env.PORT, () => {
    try {
         connection;
         console.log(`Running on server ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
        
    }
})