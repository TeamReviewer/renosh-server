//connect cosmos DB
const client = require('./config');

const database = client.database('renosh');
const container = database.container('post' );

async function getListOfBooks(req, res){
    const querySpec = {
        query:
        "SELECT * FROM c WHERE c.type = 'book'"
    };
    try{
        const { resources: bookList } = await container.items.query(querySpec).fetchAll();
        // const { resources: bookList } = await container.items.readAll().fetchAll();
        res.json(bookList);
    }catch(error){
        res.status(500).send(error);
    }
}

async function getBookWithId(req, res){
    const querySpec = {
        query:
        "SELECT * FROM c WHERE c.type = 'book' AND  c.bookid = @book_id",
        parameters: [
            {
                name:'@book_id',
                value: req.params.bookid
            }
        ]
    };
    try{
        const { resource: book } = await container.items.query(querySpec).fetchAll();
        console.log(book);
        res.json(book);
    }catch(error){
        res.status(500).send(error);
    }
}

async function postBookInfo(req, res){
    const bookinfo = req.body;
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
    try{
        const { resource } = await container.item(bookid,bookid).replace(bookinfo);
        res.send("Book info updated Succesfully");
    }catch(error){
        res.status(500).send(error);
    }
}

async function deleteBook(req, res){
    const bookid = req.params.bookid;
    try{
        const {resource: item} = await container.item(bookid, bookid).delete();
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