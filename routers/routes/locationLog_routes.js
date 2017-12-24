import express from 'express'
import userController from '../../controllers/userLog_controller'

/**
 * @swagger
 * definitions:
 *  LocationLog:
 *      type: object
 *      required:
 *      - user_id
 *      - user_location:
 *      properties:
 *          user_id:
 *              type: number
 *          user_location:
 *              type: []
 */

let locationRouter = express.Router();



export default locationRouter;