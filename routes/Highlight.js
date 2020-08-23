const express = require('express');

const { getHglByBook, getallhighlights, getHglById, postHgl, deleteHgl, editHglmemo,getAnnotByBook, getHglByBookWithScope } = require('./Highlight_cosmos');
const router = express.Router();

//get highlights and annotations of the book
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
router.get('/:book_id/:highlight_id',(req, res)=>{
    getHglById(req,res);
})


//delete a highlight by id
router.delete('/:book_id/:highlight_id',(req, res)=>{
    deleteHgl(req,res);
})

//edit highlight memo
router.put('/:book_id/:highlight_id',(req,res)=>{
    editHglmemo(req,res);
})

router.get("/book/:book_id/:scope", (req, res)=>{
    getHglByBookWithScope(req,res);
})
module.exports = router;