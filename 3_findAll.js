var MongoClient = require('mongodb').MongoClient;
var config = require('./config.json');

MongoClient.connect(config.connectionUrl, function (err, database) {
    if (err) throw err;
    else {
        console.log('Database successfully connected.');

        // Find all users from database.
        database.collection('user').find({}).toArray(function(error, result){
            if(error) throw error;
            else{
                console.log('Result: ', result);
            }
        });

        database.close();
    }
});