import db from '../database/database.connection';

class userLog_controller{

    constructor() {
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.userLogs = this.mongoose.model('userLog', this.userLogSchema);
    }
    createSchema(){
        this.userLogSchema = new this.Schema({
            user_id: Number,
            start_session: Date,
            end_session: Date,
            reg_session: Date
        });
    }
    getUserLogs() {
        return this.userLogs.find().then((res) => {
            return res;
        });
    }
    registerActivity(req){
        let userObj = new this.userLogs(req);
        return userObj.save().then((res)=>{
            return res;
        })
    }

}
const userController = new userLog_controller();
export default userController;