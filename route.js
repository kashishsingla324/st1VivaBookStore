const express =  require("express");
const router=express.Router();
const {showData,showId,createData,updateData,deleteData}= require("../controller/bookcontroller");
const bookModel = require("../model/bookData");


router.get("/books",showData);
router.post("/books/:id",showId);
router.post("/books",createData);
router.put("/books/:id",(req,res) =>{
    const id=req.params.id;
    
    const data={
        title:req.body.title,
        genre:req.body.genre,
        authorName:req.body.authorName,
        ISBN:req.body.ISBN,
        publishYear:req.body.publishYear
    }

    bookModel.findByIdAndUpdate(id,{$set: data})
    .then(() =>{
        res.send(`data of book id ${id} has been successfully updated`)
    })
});
router.delete("/books/:id", (req,res) =>{
    const id= req.params.id;
    bookModel.findByIdAndDelete(id).then(response =>{
        res.send("one book is deleted")
    })
});
router.get("/sort",async(req,res)=>{
    const book = await bookModel.find().sort({"name":1});
    res.send(book);
})

module.exports=router;