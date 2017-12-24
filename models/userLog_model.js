import mongoose from 'mongoose';
import bluebird from 'bluebird';
import db from '../database/database.connection';

class userLog_model{

    constructor() {
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.getUserLogs_model();
    }

    createSchema(){
        this.userLogSchema = new this.Schema({
            name: String,
            lastName: String,
            age: Number,
            teachers: Array,
            courses: Array
        }, {versionKey: false})
    }
    getUserLogs_model() {
        this.mongoose.model('userLog', this.userLogSchema);
    }

}
const userModel = new userLog_model();
export default userModel;