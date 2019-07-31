const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient
const assert = require('assert');
var cors = require('cors');
// import mongoose from 'mongoose';

// app.use(cors());


const app = express();
const port = process.env.PORT || 5000;
const url = 'mongodb://localhost:27017';
let db='';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

mongo.connect(url, (err, client)=> {
  useNewUrlParser: true;
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db('poemdb');
  // client.close();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ welcome_msg: 'Welcome to Mad Poem Game'
               });
}); 

app.get('/api/retrieveAll', (req, res) => {
  console.log('trying to retrieve all docs from collection poem_tale');
   var collection = db.collection('poem_table');
  let data = collection.find().toArray()
  .then(data=>res.json(data))
  .catch(err=> console.log(err));
  setTimeout(async()=> {
    console.log(data); 
    // res.send(data); 
}, 0); 
  

});

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });




app.post('/api/submitPoem', (req, res) => {
   console.log('trying to update in db');
   // Set our collection
   var collection = db.collection('poem_table');
   let timestamp = new Date().getTime();
   // Submit to the DB
   collection.insertOne({
       "poem" : req.body.poem,
       "time" : timestamp,
   }, function (err, doc) {
       if (err) {
         console.log('Error');  
         // If it failed, return error
           res.send("There was a problem adding the information to the database.");
       }
       else {
           console.log('Updated');
           // And forward to success page
          //  res.redirect("Updated");
       }
   });
   
  console.log(req.body.poem);
  res.send(
    `I received your Poem via POST request. This is what you sent me: ${req.body.poem}`,
  );
  // console.log('DB updated');
});

app.listen(port, () => console.log(`Listening on port ${port}`));