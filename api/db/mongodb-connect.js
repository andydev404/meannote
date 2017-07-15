const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const connected = mongoose.connect('mongodb://localhost:27017/meanApp',{useMongoClient:true});

connected.catch((err)=>{
    console.log('Database connection error');
})


module.exports = {connected};