//connect cosmos DB
const client = require('./config');

const database = client.database('renosh');
const container = database.container('bookbinder' );

async function getListOfBooks(req, res){
    try{
        const { resources: bookList } = await container.items.readAll().fetchAll();
        // console.log(bookList)
        res.json(bookList);
    }catch(error){
        res.status(500).send(error);
    }
}

async function getBookWithId(req, res){
    try{
        const bookid = req.params.bookid;
        const { resource: book } = await container.item(bookid, undefined).read();
        console.log(book);
        res.json(book);
    }catch(error){
        res.status(500).send(error);
    }
}

async function postBookInfo(req, res){
    const bookinfo = req.body;
    // {
    //     title: "The Little Prince",
    //     author: "Antoine de Saint-Exupéry",
    //     summary: "Summary of The Little Prince",
    //     image: "https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg",
    //     epubURL: "https://pdfstop.com/get-download?file=838"
    // }

    try{
        const { resource } = await container.items.create(bookinfo);
        console.log(resource.id);
        res.json(resource.id);
    }catch(error){
        res.status(500).send(error);
    }
}

async function putBookInfo(req, res){
    const bookid = req.params.bookid;
    const bookinfo = req.body;
    // {
    //     id : bookid,
    //     title: "The Little Prince",
    //     author: "Antoine de Saint-Exupéry",
    //     summary: "Summary of The Little Prince",
    //     image: "https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg",
    //     epubURL: "https://pdfstop.com/get-download?file=838"
    // }
    try{
        const { resource } = await container.item(bookid,undefined).replace(bookinfo);
        res.send("Book info updated Succesfully");
    }catch(error){
        res.status(500).send(error);
    }
}

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

module.exports = {
    getListOfBooks,
    getBookWithId,
    postBookInfo,
    putBookInfo,
    deleteBook
}