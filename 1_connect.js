var MongoClient = require('mongodb').MongoClient;
var config = require('./config.json');

MongoClient.connect(config.connectionUrl, function(err, database){
   if(err) throw err;
   else{
       console.log('Database successfully connected.');
       // Do some CRUD operations here
       // ...
       database.close();
   }
});