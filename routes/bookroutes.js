
/**
 * @swagger
 * definition:
 *   Register:
 *     properties:
 *       author:
 *         type: string
 *         example: Amit Verma
 *       title:
 *         type: string
 *         example: This is test title
 *       isbn:
 *         type: string
 *         example: Music
 *       release_date:
 *         type: string
 */


/**
 * @swagger
 * /api/v2/library/register:
 *   post:
 *     tags:
 *       - BookModel
 *     description: Creates Registration
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Register
 *         description: Register object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Register'
 *     responses:
 *       200:
 *         description: Successfully created
 */

/**
 * @swagger
 * /api/v2/library/bookinfo:
 *   get:
 *     tags:
 *       - BookModel
 *     description: Get All book information
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Get All book information
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 */

/**
 * @swagger
 * /api/v2/library/bookinfo/{id}:
 *   get:
 *     tags:
 *       - BookModel
 *     description: Get Particular book information
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of book
 *         in: path
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: Get Particular book information
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 */



/**
 * @swagger
 * definition:
 *   updateBookDetails:
 *     properties:
 *       id:
 *         type: integer
 *         example: 103  
 *       author:
 *         type: string
 *         example: Amit Verma
 *       title:
 *         type: string
 *         example: This is test title
 *       isbn:
 *         type: string
 *         example: Music
 *       release_date:
 *         type: string
 *         example: 2020-06-16
 */


/**
 * @swagger
 * /api/v2/library/bookinfo:
 *   put:
 *     tags:
 *       - BookModel
 *     description: update Book Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Register
 *         description: book details object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/updateBookDetails'
 *     responses:
 *       200:
 *         description: Successfully created
 */


/**
 * @swagger
 * /api/v2/library/bookinfo/{id}:
 *   delete:
 *     tags:
 *       - BookModel
 *     description: Delete Particular book information
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of book
 *         in: path
 *         required: true
 *         type: "string"
 *     responses:
 *       200:
 *         description: Delete Particular book information
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 */


