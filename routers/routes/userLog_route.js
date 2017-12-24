import express from 'express'
import userController from '../../controllers/userLog_controller'

/**
 * @swagger
 * definitions:
 *  UserLog:
 *      type: object
 *      required:
 *      - user_id
 *      - start_session
 *      - end_session
 *      - reg_session
 *      properties:
 *          user_id:
 *              type: number
 *          start_session:
 *              type: date
 *          end_session:
 *              type: date
 *          reg_session:
 *              type: date
 */

let userRouter = express.Router();

/**
 * @swagger
 * /user/users:
 *  get:
 *      tags:
 *      - user-logs
 *      summary: get all user-logs data
 *      description: get all existing logs on users
 *      responses:
 *          201:
 *              description: ok
 */
userRouter.get('/users', (req, res)=>{
    console.log('Listening to get: /user/users');
    userController.getUserLogs().then( (data)=>{
        /*res.send(data);*/
        console.log('Res for get all user logs is: ', data);
    })
});

/**
 * @swagger
 * /user/add-users:
 *  post:
 *      tags:
 *      - user-logs
 *      summary: record activity
 *      description: record a new user and/or user activity
 *      parameters:
 *      - in: body
 *        user_id: number
 *        start_session: date
 *        end_session: date
 *        reg_session: date
 *        required: true
 *        schema:
 *           $ref: '#/definitions/UserLog'
 *      responses:
 *          201:
 *              description: ok
 *
 */
userRouter.post('/add-users', (req, res)=>{
    // maybe need to add token adn verify that its the admin that checks this one out?
    console.log('Listening to post: /user/users');
    console.log('Request is: ', req.body);
    let user = {
        user_id: req.body.user_id,
        start_session: req.body.start_session,
        end_session: req.body.end_session,
        reg_session: req.body.reg_session
    };
    userController.registerActivity(user).then((response) => {
        res.status(201);
        res.send(response);
    }).catch((err) => {
        res.status(409);
        res.send(err);
    });

});

export default userRouter;