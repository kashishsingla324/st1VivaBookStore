const mongoose = require('mongoose');

const bookSchema= mongoose.Schema({
    title:{type:String, required:true},
    genre:{type:Array},
    authorName:{type:String},
    publishDate:{type:String},
    isbn:{type:Number}
},{timestamps:true})

const bookModel = mongoose.model("st1viva",bookSchema);
module.exports= bookModel;