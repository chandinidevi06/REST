var books=require("../model/books")
var getAllBooks=async(req,res)=>{
     var allBooks=await books.find()
    res.status(200).json(allBooks)
}
var getSingleBook=async(req,res)=>{
     var bookId=req.params.id
     var myBook=books.findById(bookId)
     res.status(200).json(myBook)

}
var addBook=async(req,res)=>{
     var formData=req.body
     var newBook=await books.create(FormData)
     if(newBook){
         res.status(201).json(newBook)
     }
}
var updateBook=async(req,res)=>{
    
    var bookId=req.params.id
    var updateBook=req.body
    var updateBook=await Books.findIdandUpdate(bookId,updateData)
    if(updateBook){
        res.status(200).json(updateBook)
    }else{
        res.status(404).json({message :"cannot update"})
    }
}
var DeleteBook=async (req,res)=>{
    var bookId=req.params.id
    var DeleteBook=await Books.findIdandDelete(bookId)
    if(deleteBook){
        res.status(200).json(deleteBook)
    }else{
        res.status(404).json({message: "cannot delete"})
    }

}
module.exports={
    getAllBooks,getSingleBook,addBook,updateBook,DeleteBook
}

