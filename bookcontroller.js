const bookModel = require("../model/bookData");

const showData = (req,res) => {
    bookModel.find().then(response =>{
        res.send(response)
        // console.log(response);
    })
    .catch(err => {
        res.json({
            message:'an error'
        })
    })
}

const showId = (req,res) =>{
    const id= req.params.id;
    bookModel.findById(id).then(response =>{
        res.send(response)
        // console.log(response);
    })
    .catch(err => {
        res.json({
            message:'an error'
        })
    })

}
const createData = (req,res) =>{
    const nbook = new bookModel({
        title:req.body.title,
        genre:req.body.genre,
        authorName:req.body.authorName,
        ISBN:req.body.ISBN,
        publishYear:req.body.publishYear
       
    }) 

    nbook.save().then(response =>{
        res.send("book is successfully added")
    })
}





module.exports = {showData,showId,createData,updateData,deleteData};