const express = require("express");
const app = express();
const dotenv = require("dotenv");
const DbConnect = require('./database');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const tourRoute = require("./routes/tour");
const signRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const tour_middleware = require('./middlewares/tour_middleware')



dotenv.config();

//Database Connection


DbConnect();
app.use(express.json());
var corsOptions = {

    origin: 'https://travel-site-blog.netlify.app',
    optionsSuccessStatus: 200, // For legacy browser support
    credentials: true,
    origin: true,

}

app.use(cors(corsOptions));



app.use("/api/tour", tour_middleware, tourRoute);
app.use("/api/signup", signRoute);
app.use("/api/login", loginRoute);







app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});