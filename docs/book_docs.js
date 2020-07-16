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