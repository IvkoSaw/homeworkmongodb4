var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hw";

//#5
MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server");
    db.collection("posts")
        .find()
        .toArray(function (err, docs) {
            if (err) {
                return console.log(err);
            }
            console.log(docs);
            db.close();
        });
});

//#6
MongoClient.connect(url, function (err, db) {
   console.log("Connected correctly to server");
   db.collection("posts")
       .find({name:{$exists:true}})
       .toArray(function (err, docs) {
            if (err) {
                return console.log(err);
            }
            console.log(docs);
            db.close();
       })
});

//#7
MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server");
    db.collection("posts")
        .find({comments:{$size:5}})
        .count(function (err,docs) {
            if (err) {
                return console.log(err);
            }
            console.log(docs);
            db.close();
        });
});

//#8
MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server");
    db.collection("posts")
        .find({"author.age":{$gt:25}})
        .toArray(function (err,docs) {
            if (err) {
                return console.log(err);
            }
            console.log(docs);
            db.close();
        });
});

//#9
MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server");
    db.collection("posts")
        .find({"published": false}, {"author.eyeColor": "green"})
        .toString(function (err,docs) {
            if (err) {
                return console.log(err);
            }
            console.log(docs);
            db.close();
        });
});

//#10
MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server");
    db.collection("posts")
        .find({"author.gender":"female", "author.age":{$gt:40}})
        .toArray(function (err,docs) {
            if (err) {
                return console.log(err);
            }
            console.log(docs);
            db.close();
        });
});