const express = require('express')
require('dotenv').config();
const { MongoClient } = require('mongodb');
const url =process.env.MONGO_URI;
const cors = require('cors');
const bodyParser = require('body-parser');
const client = new MongoClient(url);
const app = express()
const port = 8080
app.use(cors());
app.use(bodyParser.json());
const dbName = 'questionbank';
async function main(){
    await client.connect();


app.post('/Admin',async (req, res) => {
    const {password}=req.body;
     const db = client.db(dbName);
  const collection = db.collection('passwords');
  if(password==process.env.PASSWORD){
const insertResult = await collection.insertOne({success:true});
 res.send({success:true});
}
else{
    const insertResult = await collection.insertOne({success:false});
 res.send({success:false})
}
})
app.get('/Admin',async (req, res) => {
     const db = client.db(dbName);
  const collection = db.collection('passwords');
const findResult = await collection.find({}).toArray();
 res.json(findResult);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/Questions', async (req, res) => {
  const {questions,subjects,year,grade,tags}=req.body;
const tagsarray=tags
.split(",")
.map(i=> i.trim())
.filter(i=>i.length>0)
const questionsarray=questions
.split("?")
.map(i=> i.trim())
.filter(i=> i.length>0)
.map(i=> ({
  questions:i+'?',
  subjects,
  year,
  grade,
  tags:tagsarray

}))




const db = client.db(dbName);
  const collection = db.collection('questions');
  const insertResult = await collection.insertMany(questionsarray);
res.send({Success:true,Result:insertResult});
})
app.get('/Questions',async (req, res) => {
     const db = client.db(dbName);
  const collection = db.collection('questions');
const findResult = await collection.find({}).toArray();
 res.json(findResult);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}
main()
