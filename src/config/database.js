const mongoose = require('mongoose');


const connect = async() =>{
    // await mongoose.connect(`mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5/twitter_Dev`);
    await mongoose.connect('mongodb+srv://rkraushan0303:eikaxVTtFZC4NjEt@cluster0.ifmnxzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}


module.exports = connect;