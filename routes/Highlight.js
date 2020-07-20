const express = require('express');

const { getHglByBook, getallhighlights, getHglById, postHgl, deleteHgl, editHglmemo,getAnnotByBook } = require('./Highlight_cosmos');
const router = express.Router();

/**
 * @swagger
 * definitions:
 *  HighlightModel:
 *   type: object
 *   required:
 *     - high_id
 *     - book_id
 *     - user_id
 *     - location
 *     - memo
 *   properties:
 *     high_id:
 *       type: string
 *       description: 밑줄 id
 *     book_id:
 *       type: string
 *       description: 책 id
 *     user_id:
 *       type: string
 *       description: 회원 id
 *     location:
 *       type: string
 *       description: 밑줄 위치
 *     text:
 *       type: string
 *       description: 어노테이션
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
 *  /api/highlights/book/{book_id}:
 *    get:
 *      tags:
 *      - Highlights
 *      name: Get All Highlights By Book ID
 *      summary: Get All Highlights By Book ID
 *      description: 특정 책에 대한 모든 밑줄들을 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: book_id
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: array
 *          items:
 *            properties:
 *              high_id:
 *                type: string
 *                description: 밑줄 id
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */ 
//get highlights of the book
router.get("/book/:book_id/", (req, res)=>{
    getHglByBook(req,res);
})

/**
 * @swagger
 *  /api/highlights/book/{book_id}/memo:
 *    get:
 *      tags:
 *      - Highlights
 *      name: Get All Annotations By Book ID
 *      summary: Get All Annotations By Book ID
 *      description: 특정 책에 대한 모든 메모들을 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: book_id
 *        in: path
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: array
 *          items:
 *            properties:
 *              high_id:
 *                type: string
 *                description: 밑줄 id
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */  
//get annotations of the book
router.get("/book/:book_id/memo",(req,res)=>{
    getAnnotByBook(req,res);
})

/**
 * @swagger
 *  /api/highlights/book/{book_id}:
 *    post:
 *      tags:
 *      - Highlights
 *      name: Register One Highlight / Annotation
 *      summary: Register One Highlight / Annotation
 *      description: 특정 책에 대한 하나의 밑줄을 등록하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: book_id
 *         in: path
 *         schema:
 *           type: string
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/HighlightModel'
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: object
 *          properties:
 *            high_id:
 *              type: string
 *              description: 밑줄 id
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */ 
//post a highlight on the book
router.post("/book/:book_id",(req, res)=>{
    postHgl(req, res);
})

 /**
 * @swagger
 *  /api/highlights/{high_id}:
 *    get:
 *      tags:
 *      - Highlights
 *      name: Get A Specific Highlight By Highlight ID
 *      summary: Get A Specific Highlight By Highlight ID
 *      description: 하나의 밑줄 정보를 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: high_id
 *        in: path
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            $ref: '#/definitions/HighlightModel'
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
//get a highlight by id
router.get('/:highlight_id',(req, res)=>{
    getHglById(req,res);
})

 /**
 * @swagger
 *  /api/highlights/{high_id}:
 *    delete:
 *      tags:
 *      - Highlights
 *      name: Delete A Specific Highlight By Highlight ID
 *      summary: Delete A Specific Highlight By Highlight ID
 *      description: 하나의 밑줄 정보를 삭제하는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: high_id
 *        in: path
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            type: object
 *            properties:
 *              high_id:
 *                type: string
 *                description: 밑줄 id
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
//delete a highlight by id
router.delete('/:highlight_id',(req, res)=>{
    deleteHgl(req,res);
})

 /**
 * @swagger
 *  /api/highlights/{high_id}:
 *    put:
 *      tags:
 *      - Highlights
 *      name: Update A Specific Highlight(Annotation) By Highlight ID
 *      summary: Update A Specific Highlight(Annotation) By Highlight ID
 *      description: 하나의 밑줄 정보를 수정하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: high_id
 *         in: path
 *         schema:
 *           type: string
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/HighlightModel'
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            $ref: '#/definitions/HighlightModel'
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'
 */
//edit highlight memo
router.put('/:highlight_id',(req,res)=>{
    editHglmemo(req,res);
})

module.exports = router;