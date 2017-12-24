import express from 'express';
import bodyParser from 'body-parser';
import Swagger from './services/swagger.service';
import cors from  'cors';
import db from './database/database.connection';

import {SwaggerRoute, UserRouter, EventRouter} from './routers/index.routing';

let app = express();
const port = process.env.PORT || 10010;
let swagger = new Swagger();

app.use(cors());
app.disable('etag');
app.use(bodyParser.json({limit: '5mb'}) );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true,
    limit: '5mb'
}));

// application api
app.use('/user', UserRouter);
app.use('/event', UserRouter);

// Swagger
app.use('/api-docs-logs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.swaggerSpec));
app.use('/swagger', SwaggerRoute);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);