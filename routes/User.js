const express = require('express');
const router = express.Router();
const { getListOfUsers, postUserInfo, getUserById, updateUserById, deleteUserById } = require('./User_cosmos');


router.get('/', (req, res) => {
    getListOfUsers(req, res);
});


router.post('/', (req, res) => {
    postUserInfo(req, res);
});


router.get('/:user_id', (req, res) => {
    getUserById(req, res);
});

router.put('/:user_id', (req, res) => {
    updateUserById(req, res);
});

router.delete("/:user_id",(req, res)=>{
    deleteUserById(req, res);
});


module.exports = router;

