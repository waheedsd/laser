var express = require("express");
var router = express.Router();
router.get('/', function(req,res,next){
    var wipdata = {
    "sheetMetal":[
        {"id":"1-101","type":"MT101-1","time":null},
        {"id":"2-102","type":"MT102-2","time":null},
        {"id":"3-103","type":"MT103-3","time":null},
        {"id":"4-104","type":"MT104-4","time":null},
        {"id":"5-105","type":"MT105-5","time":null},
        {"id":"6-106","type":"MT106-6","time":null},
        {"id":"7-107","type":"MT107-7","time":null},
        {"id":"8-108","type":"MT108-8","time":null},
        {"id":"9-109","type":"MT109-9","time":null},
        {"id":"10-110","type":"MT110-10","time":null},
        {"id":"11-111","type":"MT111-11","time":"11:20"}
    ]
    }
    res.send(JSON.stringify(wipdata));
});
module.exports = router;