const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


// db connection
// ============================================================================
const uri = process.env.URI;

mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongoose DB collection established successfully....')
})

connection.on('error', err =>{
    console.error(err)
})
// ============================================================================

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

// routes
const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)



// listen on port 
app.listen(port, () =>{
    console.log(`Server running on port ${port}....`);
});