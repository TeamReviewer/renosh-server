const express = require('express');
const router = express.Router();
//connect cosmos DB
const client = require('./config');

const database = client.database('renosh');
const container = database.container('book' );

async function getListOfBooks(req, res){
    try{
        const { resources: bookList } = await container.items.readAll().fetchAll();
        console.log(bookList)
        res.json(bookList); //error try-catch 사용
    }catch(error){
        res.status(500).send(error);
    }
}

router.get("/", (req, res)=>{
    // res.send("list of books");
    getListOfBooks(req, res);
})

async function getBookWithId(req, res){
    try{
        const bookid = req.params.bookid;
        const { resource: book } = await container.item(bookid, undefined).read();
        console.log(book);
        res.json(book); // 동일 error 발생
    }catch(error){
        res.status(500).send(error);
    }
}

router.get("/:bookid", (req, res)=>{
    // res.send(`a book. id: ${req.params.bookid}`);
    getBookWithId(req, res);
})

async function postBookInfo(req, res){
    const bookinfo =
    {
        // id : "1",
        bookName: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        image: "https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg",
        epubURL: "https://pdfstop.com/get-download?file=838"
    }

    try{
        const { resource } = await container.items.create(bookinfo);
        console.log(resource.id);
        res.json(resource.id);
    }catch(error){
        res.status(500).send(error);
    }
}

router.post("/", (req, res)=>{
    postBookInfo(req, res);
})

async function putBookInfo(req, res){
    const bookinfo =
    {
        // id : "1",
        bookName: "The Little Prince _ updated",
        author: "Antoine de Saint-Exupéry",
        image: "https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg",
        epubURL: "https://pdfstop.com/get-download?file=838"
    }
    try{
        const bookid = req.params.bookid;
        console.log(bookid);
        const { resource } = await container.item(bookid,undefined).replace(bookinfo);
        res.send("Book info updated Succesfully");
    }catch(error){
        res.status(500).send(error);
    }
}

router.put("/bookid", (req, res)=>{
    putBookInfo(req, res);
})

async function deleteBook(req, res){
    const bookid = req.params.bookid;
    try{
        const {resource: item} = await container.item(bookid, undefined).delete();
        res.status(200).json({"book id":bookid});
        console.log("Book deleted successfully");
    } catch(error){
        res.status(500).send(error);
    }
}

router.delete("/:bookid",(req, res)=>{
    deleteBook(req, res);
});

module.exports = router;