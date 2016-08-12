var dbObj=require("./db.js");
//define schema for storing records in the database
var schema=new dbObj.mongoose.Schema({
    id: Number,
    usnm: String,
    pswd: String,
    loginid: Number
});
//define d collection name, where d records are to be stored
module.exports=dbObj.db.model("login",schema);