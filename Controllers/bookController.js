
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
     var newBook=await books.create(formData)
     if(newBook){
         res.status(201).json(newBook)
     }
     
}
var updateBook=async(req,res)=>{
    
    var bookId=req.params.id
    var updateData=req.body
    var updateBoook=await books.findIdandUpdate(bookId,updateData)
    if(updateBoook){
        res.status(200).json(updateBook)
    }else{
        res.status(404).json({message :"cannot update"})
    }
}
var DeleteBook=async (req,res)=>{
    var bookId=req.params.id
    var DeleteBook=await books.findIdandDelete(bookId)
    if(DeleteBook){
        res.status(200).json(DeleteBook)
    }else{
        res.status(404).json({message: "cannot delete"})
    }

}
module.exports={
    getAllBooks,getSingleBook,addBook,updateBook,DeleteBook
}

