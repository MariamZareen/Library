import mongoose from 'mongoose';


//mongoose.connect('mongodb://localhost:27017/BookWebsite')
mongoose.connect ('mongodb+srv://mariamzareen184:Mongodb@bookwebsite.retsjg3.mongodb.net/')
.then(()=>{
    console.log("database connected successfully");
})
.catch(()=>{
    console.log("failed connecting to the database");
})

const schema=mongoose.Schema({
    title:String,
    author:String,
    isbn:String
})

export const Book=mongoose.model('Book Details',schema);
