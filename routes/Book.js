const express = require('express');
const router = express.Router();
const { getListOfBooks, getBookWithId, postBookInfo, putBookInfo, deleteBook } = require('./Book_cosmos');

/**
 * @swagger
 * definitions:
 *  BookModel:
 *   type: object
 *   required:
 *     - book_id
 *     - title
 *     - author
 *     - summary
 *     - image
 *     - epubURL
 *   properties:
 *     book_id:
 *       type: string
 *       description: 책 id
 *     title:
 *       type: string
 *       description: 책 제목
 *     author:
 *       type: string
 *       description: 저자
 *     summary:
 *       type: string
 *       description: 요약
 *     image:
 *       type: string
 *       description: 이미지 (스토리지 주소)
 *     epubURL:
 *       type: string
 *       description: epub 주소
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
 *  /api/books:
 *    get:
 *      tags:
 *      - Books
 *      name: Get All Books
 *      summary: Get All Books
 *      description: 모든 책들을 가져오는 요청
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: array
 *          items:
 *            properties:
 *              book_id:
 *                type: string
 *                description: 책 id
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */
router.get("/", (req, res)=>{
    getListOfBooks(req, res);
})

/**
 * @swagger
 *  /api/books/{bookid}:
 *    get:
 *      tags:
 *      - Books
 *      name: Get A Specific Book By Book ID
 *      summary: Get A Specific Book By Book ID
 *      description: 한 권의 책 정보를 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: bookid
 *        in: path
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            $ref: '#/definitions/BookModel'
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
router.get("/:bookid", (req, res)=>{
    getBookWithId(req, res);
})

/**
 * @swagger
 *  /api/books:
 *    post:
 *      tags:
 *      - Books
 *      name: Register One Book
 *      summary: Register One Book
 *      description: 책 한 권을 등록하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/BookModel'
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: object
 *          properties:
 *            book_id:
 *              type: string
 *              description: 책 id
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */ 
router.post("/", (req, res)=>{
    postBookInfo(req, res);
})

/**
 * @swagger
 *  /api/books/{bookid}:
 *    put:
 *      tags:
 *      - Books
 *      name: Update A Specific Book By Book ID
 *      summary: Update A Specific Book By Book ID
 *      description: 한 권의 책 정보를 수정하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: bookid
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/BookModel'
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            $ref: '#/definitions/BookModel'
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
router.put("/:bookid", (req, res)=>{
    putBookInfo(req, res);
})

/**
 * @swagger
 *  /api/books/{bookid}:
 *    delete:
 *      tags:
 *      - Books
 *      name: Delete A Specific Book By Book ID
 *      summary: Delete A Specific Book By Book ID
 *      description: 한 권의 책 정보를 삭제하는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: bookid
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            type: object
 *            properties:
 *              book_id:
 *                type: string
 *                description: 책 id
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
router.delete("/:bookid",(req, res)=>{
    deleteBook(req, res);
});

module.exports = router;