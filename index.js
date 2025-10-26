const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');


// 74F3NyDVF9YvWY8J
// T0xxjPyuFJbqpVO4
const password = process.env.MONGODB_PASSWORD || 'T0xxjPyuFJbqpVO4';
const uri = `mongodb+srv://arfat1:${password}@cluster0.ruswoxv.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      app.post('/users', (req, res)=>{
        console.log('data in the server', req.body);
      })





      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected toMongoDB!");
    } catch(error){
        console.log(error);
    }
  }

  run().catch(console.dir);

app.use(cors())
app.use(express.json())

// app.post('/users', (req, res) => {
//   console.log('✅ Data received in server:', req.body);
//   res.send('Data received successfully!');
// });

app.get('/',(req, res) =>{
    res.send('hello')
})

app.listen(port, ()=>{
    console.log(`app running on ${port}`);
    
})
