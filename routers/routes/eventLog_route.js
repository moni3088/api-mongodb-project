import express from 'express'
import userController from '../../controllers/userLog_controller'

/**
 * @swagger
 * definitions:
 *  EventLog:
 *      type: object
 *      required:
 *      - user_id
 *      - location
 *      properties:
 *          user_id:
 *              type: number
 *          location:
 *              type: []
 */

let eventRouter = express.Router();

/**
 * @swagger
 * /event/events:
 *  get:
 *      tags:
 *      - event-logs
 *      summary: get all user-logs data
 *      description: get all existing logs on users
 *      responses:
 *          201:
 *              description: ok
 */
eventRouter.get('/events', (req, res)=>{
    /*console.log('Listening to get: /user/users');
    userController.getUserLogs().then( (data)=>{
        /!*res.send(data);*!/
        console.log('Res for get all user logs is: ', data);
    })*/
});

/**
 * @swagger
 * /event/events:
 *  post:
 *      tags:
 *      - event-logs
 *      summary: record event data
 *      description: record new event activity
 *      parameters:
 *      - in: body
 *        event_id: number
 *        location: []
 *        required: true
 *        schema:
 *           $ref: '#/definitions/EventLog'
 *      responses:
 *          201:
 *              description: ok
 *
 */
eventRouter.post('/events', (req, res)=>{
   /* // maybe need to add token adn verify that its the admin that checks this one out?
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
*/
});

export default eventRouter;