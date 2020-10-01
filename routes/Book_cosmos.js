//connect cosmos DB
const client = require('./config');

const database = client.database('renosh');
const container = database.container('bookbinder' );

async function getListOfBooks(req, res){
    const querySpec = {
        query:
        "SELECT * FROM c WHERE c.type = 'book'"
    };
    try{
        const { resources: bookList } = await container.items.query(querySpec).fetchAll();
        res.json(bookList);
    }catch(error){
        res.status(500).send(error);
    }
}

async function getBookWithId(req, res){
    try{
        const bookid = req.params.bookid;
        const { resource: book } = await container.item(bookid, undefined).read();
        res.json(book);
    }catch(error){
        res.status(500).send(error);
    }
}

async function postBookInfo(req, res){
    const bookinfo = req.body;
    try{
        const { resource } = await container.items.create(bookinfo);
        res.json(resource.id);
    }catch(error){
        res.status(500).send(error);
    }
}

async function putBookInfo(req, res){
    const bookid = req.params.bookid;
    const bookinfo = req.body;
    try{
        const { resource } = await container.item(bookid,undefined).replace(bookinfo);
        res.send("Book info updated Succesfully");
    }catch(error){
        res.status(500).send(error);
    }
}

async function putEmotionCount(req, res){
    const bookid = req.params.bookid;
    try{
        const {resource:curitem} = await container.item(bookid,undefined).read();
        //console.log(req.body.emotion);
        if(req.body.emotion == "positive"){
            curitem.emotion[0].positive = (parseInt(curitem.emotion[0].positive) + 1)           
        }else if(req.body.emotion == "native"){
            curitem.emotion[1].native = (parseInt(curitem.emotion[1].native) + 1) 
        }else{
            curitem.emotion[2].negative = (parseInt(curitem.emotion[2].negative) + 1)
        }
        const { resource } = await container.item(bookid,undefined).replace(curitem);
        res.send(`update to count of ${req.body.emotion}`);
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
    putEmotionCount,
    deleteBook
}