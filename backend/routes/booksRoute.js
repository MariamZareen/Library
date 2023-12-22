import express from "express";
import { Book } from "../mongo.js";

const router=express.Router()
//router.use(cors())
//Get-READ
router.get('/',async(req,res)=>{
    try{
        const search=await Book.find()
        return res.json(search)
        }
        catch{
            res.status(500).json("couldnot get your data");
        }
})
router.get('/:id',async(req,res)=>{
    try{
    const {id}=req.params;
    const search=await Book.findById(id)
    return res.json(search)
    }
    catch{
        res.status(500).json("couldnot get your data");
    }
})
//POST-Create
router.post('/',async(req,res)=>{
    try{
       const data=new Book({
         title:req.body.title,
         author:req.body.author,
         isbn:req.body.isbn
       })
       await data.save();
       console.log('data saved to database successfully via post');
    }
    catch{
        res.send("Error occured performing post opperation")
    }
})
//PUT-update
router.put('/:id',async(req,res)=>{
    try{
    if(!req.body.title || !req.body.author || !req.body.isbn){
        return res.status(400).json('all fields are required');
    }
    const {id}=req.params;
    const update = await Book.findByIdAndUpdate(id,req.body);
    if(!update) return res.send("failed to update")
    return res.json("books updated successfully")
    }
    catch{
        return res.status(500).json('some error occured');
    }
})
//Delete-Delete
router.delete('/:id',async(req,res)=>{
    try{
      const {id}=req.params
      const dlt=await Book.findByIdAndDelete(id);
      if(dlt) return res.json("book deleted successfully")
       else return res.status(400).send("book not found")
    }
    catch{
        res.send("couldnot delete the record due to error")
    }
})

export default router;
