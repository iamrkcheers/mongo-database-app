//connection is made
var mongoose=require("mongoose");
var config=require("./config.js");
var db=mongoose.connect(config.dbURL);
var dbObj={
    "db":db,
    "mongoose":mongoose
}
module.exports=dbObj;