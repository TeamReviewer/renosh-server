const express = require('express');
const router = express.Router();
const { getListOfBooks, getBookWithId, getBestEmotionBooks, postBookInfo, putBookInfo, deleteBook, getBookListofMaxHighlights } = require('./Book_cosmos');

router.get("/highlightmaxbooks",(req,res)=>{
    getBookListofMaxHighlights(req,res);
});

router.get("/", (req, res)=>{
    getListOfBooks(req, res);
    console.log("testing");
})

router.get("/:bookid", (req, res)=>{
    getBookWithId(req, res);
})

router.get("/emotion/best", (req, res)=>{
    getBestEmotionBooks(req, res);
})

router.post("/", (req, res)=>{
    postBookInfo(req, res);
})

router.put("/:bookid", (req, res)=>{
    putBookInfo(req, res);
})

router.delete("/:bookid",(req, res)=>{
    deleteBook(req, res);
});



module.exports = router;