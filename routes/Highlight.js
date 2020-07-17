const express = require('express');
<<<<<<< HEAD
const router = express.Router();

=======
const { getHglByBook, getallhighlights, getHglById, postHgl, deleteHgl, editHglmemo,getAnnotByBook } = require('./Highlight_cosmos');
const router = express.Router();

//get highlights of the book
router.get("/book/:book_id/", (req, res)=>{
    getHglByBook(req,res);
})

//get annotations of the book
router.get("/book/:book_id/memo",(req,res)=>{
    getAnnotByBook(req,res);
})

//post a highlight on the book
router.post("/book/:book_id",(req, res)=>{
    postHgl(req, res);
})

//get a highlight by id
router.get('/:highlight_id',(req, res)=>{
    getHglById(req,res);
})


//delete a highlight by id
router.delete('/:highlight_id',(req, res)=>{
    deleteHgl(req,res);
})

//edit highlight memo
router.put('/:highlight_id',(req,res)=>{
    editHglmemo(req,res);
})

>>>>>>> 1e8f764d085b7e2df68fe1854a56925ea6ca5ae9
module.exports = router;