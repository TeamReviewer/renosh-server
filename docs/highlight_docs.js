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
 *     memo:
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
 *  /api/book/:book_id:
 *    get:
 *      tags:
 *      - Highlights
 *      name: Get All Highlights
 *      summary: Get All Highlights
 *      description: 특정 책에 대한 모든 밑줄들을 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: request query
 *        in: query
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

 *    post:
 *      tags:
 *      - Highlights
 *      name: Register One Highlight
 *      summary: Register One Highlight
 *      description: 특정 책에 대한 하나의 밑줄을 등록하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: request body
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

/**
 * @swagger
 *  /api/book/:book_id/memo:
 *    get:
 *      tags:
 *      - Highlights
 *      name: Get All Annotations
 *      summary: Get All Annotations
 *      description: 특정 책에 대한 모든 메모들을 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: request query
 *        in: query
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

 /**
 * @swagger
 *  /api/:high_id:
 *    get:
 *      tags:
 *      - Highlights
 *      name: Get A Specific Highlight
 *      summary: Get A Specific Highlight
 *      description: 하나의 밑줄 정보를 가져오는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: request query
 *        in: query
 *      responses:
 *        200:  
 *          description: 요청 성공
 *          schema:
 *            $ref: '#/definitions/HighlightModel'
 *        400:
 *          $ref: '#/definitions/ErrorResponse/400'
 *        500:
 *          $ref: '#/definitions/ErrorResponse/500'

 *    put:
 *      tags:
 *      - Highlights
 *      name: Update A Specific Highlight(Annotation)
 *      summary: Update A Specific Highlight(Annotation)
 *      description: 하나의 밑줄 정보를 수정하는 요청
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *       - name: request body
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

 *    delete:
 *      tags:
 *      - Highlights
 *      name: Delete A Specific Highlight
 *      summary: Delete A Specific Highlight
 *      description: 하나의 밑줄 정보를 삭제하는 요청
 *      produces:
 *      - application/json
 *      parameters:
 *      - name: request query
 *        in: query
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