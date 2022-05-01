const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
function DbConnect() {
const uri = "mongodb+srv://Amritanshu:McuWC7anjcvKoIVq@cluster.4mar2.mongodb.net/travel?retryWrites=true&w=majority&ssl=true";
mongoose.connect(uri, { useNewUrlParser: true, }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })
}
module.exports = DbConnect;