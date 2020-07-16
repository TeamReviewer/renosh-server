/**
 * @swagger
 * definitions:
 *  BookModel:
 *   type: object
 *   required:
 *     - id
 *     - title
 *     - author
 *     - summary
 *     - image
 *     - epubURL
 *   properties:
 *     id:
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
 *      parameters:
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: array
 *          items:
 *            properties:
 *              title:
 *                type: string
 *                description: 책 제목
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'

 *    post:
 *      tags:
 *      - Books
 *      name: Register One Book
 *      summary: Register One User
 *      description: 책 한 권을 등록하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: request body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/BookModel'
 *      responses:
 *       200:
 *        description: 요청 성공
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *              description: 책 제목
 *       400:
 *         $ref: '#/definitions/ErrorResponse/400'
 *       500:
 *         $ref: '#/definitions/ErrorResponse/500'
 */ 