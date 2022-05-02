const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DbConnect = require('./database');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const tourRoute = require("./routes/tour");



dotenv.config();

//Database Connection

DbConnect();
app.use(express.json());
var corsOptions = {
    origin: 'http://127.0.0.1:5500/',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, POST, DELETE, PUT"
}

app.use(cors(corsOptions));


app.use("/api/tour", tourRoute);





app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});