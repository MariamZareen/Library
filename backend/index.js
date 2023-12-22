import express from 'express';
import cors from 'cors'
import booksRoute from './routes/booksRoute.js'
import bodyParser from 'body-parser'

const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));
app.use('/',booksRoute);
app.use(express.json())
  

app.listen(8000,cors(),()=>{
    console.log('server connected successfully on port 8000')
})

