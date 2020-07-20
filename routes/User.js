const express = require('express');
const { getListOfUsers, postUserInfo, getUserById, updateUserById, deleteUserById } = require('./User_cosmos');
const router = express.Router();

/**
 * @swagger
 * definitions:
 *  UserModel:
 *   type: object
 *   required:
 *     - user_id
 *     - password
 *     - name
 *     - register_type
 *   properties:
 *     user_id:
 *       type: string
 *       description: 아이디
 *     password:
 *       type: string
 *       description: 비밀번호
 *     name:
 *       type: string
 *       description: 이름
 *     register_type:
 *       type: string
 *       description: 가입유형
 *  ErrorResponse: 
 *    400:
 *      description: 잘못된 요청
 *      schema:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            description: 오류 사유
 *          status:
 *            type: integer
 *            description: 에러코드
 *    500:
 *      description: 서버 에러
 *      schema:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            description: 오류 사유
 *          status:
 *            type: integer
 *            description: 에러코드
 */

/**
 * @swagger
 *  /api/users:
 *    get:
 *      tags:
 *      - Users
 *      name: Get All Users
 *      summary: Get All Users
 *      description: 모든 회원들을 가져오는 요청
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: array
 *          items:
 *            properties:
 *              user_id:
 *                type: string
 *                description: 아이디
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */
router.get("/", (req, res) => {
    getListOfUsers(req, res);
});
//get a list of all users

/**
 * @swagger
 *  /api/users:
 *    post:
 *      tags:
 *      - Users
 *      name: Register One User
 *      summary: Register One User
 *      description: 회원 한 명을 등록하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/UserModel'
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: object
 *          properties:
 *            user_id:
 *              type: string
 *              description: 아이디
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */ 
// post a user
router.post('/', (req, res) => {
    postUserInfo(req, res);
});

/**
 * @swagger
 *  /api/users/{user_id}:
 *    get:
 *      tags:
 *      - Users
 *      name: Get A Specific User By User ID
 *      summary: Get A Specific User By User ID
 *      description: 한 명의 회원 정보를 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: user_id
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            $ref: '#/definitions/UserModel'
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
// get a specific user by id
router.get('/:user_id', (req, res) => {
    getUserById(req, res);
});

/**
 * @swagger
 *  /api/users/{user_id}:
 *    put:
 *      tags:
 *      - Users
 *      name: Update A Specific User By User ID
 *      summary: Update A Specific User By User ID
 *      description: 한 명의 회원 정보를 수정하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: user_id
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/UserModel'
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            $ref: '#/definitions/UserModel'
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
// put(update) a specific user by id
router.put('/:user_id', (req, res) => {
    updateUserById(req, res);
});

/**
 * @swagger
 *  /api/users/{user_id}:
 *    delete:
 *      tags:
 *      - Users
 *      name: Delete A Specific User By User ID
 *      summary: Delete A Specific User By User ID
 *      description: 한 명의 회원 정보를 삭제하는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: user_id
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            type: object
 *            properties:
 *              user_id:
 *                type: string
 *                description: 아이디
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */ 
// delete a specific user by id
router.delete("/:user_id",(req, res)=>{
    deleteUserById(req, res);
});


module.exports = router;

