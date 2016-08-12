var exp=require("express");
var abc=exp();
var bp=require("body-parser");
abc.use(exp.static("folder"));
abc.use(bp.urlencoded({extended:false}));
abc.use(bp.json());
abc.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
abc.get("/loginjson",function(req,res){
    var usage=require("./usage.js");
    usage.getUser(res);
});
abc.post("/loginpost",function(req,res){
    var usage=require("./usage.js");
    usage.addUser(req.body.id,req.body.usnm,req.body.pswd,res);
});
abc.listen(1234);