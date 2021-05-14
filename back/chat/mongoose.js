require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGOURI;

exports.connect = function () {
    const mongoose = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connect(function (err, db) {
        if (err) throw err;
        let dbo = db.db("myFirstDatabase");
        connected_users_db = dbo.collection("users");
        console.log('MongoDB is connected')
    });
    return mongoose;
}

exports.setConnectedUser = function (username, status)  {
    const update = { connected: status };
    connected_users_db?.findOneAndUpdate({name: username}, {$set: update}, function (err, res) {
        if (!res.value) {
            console.log("No user found");
        }
        if (err)  {
            throw err;
        }
    });
}
