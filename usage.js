//define the usage
var usage={
    loginid:0,
    addUser:function(id,usnm,pswd,res){
    var schema=require("./schema.js");
    console.log("schema is : "+schema);
    console.log(typeof schema);
    var user=new schema({id:id,usnm:usnm,pswd:pswd,loginid:++this.loginid});
    console.log("user is : "+user);
    user.save(function(error,data){
        if(error){
            console.log("Error ..");
            res.send("<h1>Error ..</h1>");
        }
        else{
            var path=require("path");
            console.log("Successful ..");
            res.sendFile("anime.html",{root:path.join(__dirname,"/folder")});
        }
    });
},
getUser:function(res){
    var schema=require("./schema.js");
    schema.find({},function(err,data){
        res.json(data);
    });
    }
}
module.exports=usage;
