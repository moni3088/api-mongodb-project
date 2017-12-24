import mongoose from 'mongoose';
import bluebird from 'bluebird';

class DbConnection{

    constructor(){
        mongoose.Promise = bluebird;
        this.connectToDb();
    }
    connectToDb(){
        mongoose.connect('mongodb://localhost:27017/logs', {useMongoClient: true}, (err)=> {
            if(err)
                throw err;
        });
    }
    getMongoose(){
        return mongoose;
    }

}
const  db = new DbConnection();
export default db;