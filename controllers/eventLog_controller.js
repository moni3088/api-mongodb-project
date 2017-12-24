import db from '../database/database.connection';

class eventLog_controller{

    constructor() {
        this.mongoose = db.getMongoose();
        this.Schema = this.mongoose.Schema;
        this.createSchema();
        this.eventLogs = this.mongoose.model('eventLog', this.eventLogSchema);
    }
    createSchema(){
        this.eventLogSchema = new this.Schema({
            event_id: number,
            location : { type: {type:String}, coordinates: [Number]},
        });
    }
    getEventLogs() {
        return this.userLogs.find().then((res) => {
            return res;
        });
    }
    registerEvents(req){
        let userObj = new this.userLogs(req);
        return userObj.save().then((res)=>{
            return res;
        })
    }

}
const eventLogsController = new userLog_controller();
export default eventLogsController;