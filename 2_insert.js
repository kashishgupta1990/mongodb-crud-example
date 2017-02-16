var MongoClient = require('mongodb').MongoClient;
var config = require('./config.json');

MongoClient.connect(config.connectionUrl, function (err, database) {
    if (err) throw err;
    else {
        console.log('Database successfully connected.');

        // Insert Users into database.
        database.collection('user').insertMany([
            {
                name: 'user1',
                age: 23
            },
            {
                name: 'user2',
                age: 21
            },
            {
                name: 'user3',
                age: 28
            }
        ], function(error, result){
            if(error) throw error;
            else{
                console.log('Result: ', result);
            }
        });

        database.close();
    }
});