const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()
const PORT = process.env.port ||  8080
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://user:DC9jRuwKLOPXVR5v@cluster0.hd32l.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//DC9jRuwKLOPXVR5v
mongoose.connection.on('connected', () => {
    console.log("Connect to mongo");
})
mongoose.connection.on('error', (err) => {
    console.log(" Does not Connect to mongo",err);
})
require('./models/user')
  app.use(cors())
 app.use(express.json())
 app.use(bodyParser.json())
 app.use('/user',require('./routes/user'))


if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*',(req,rse)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})