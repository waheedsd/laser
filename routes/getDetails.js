var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		"laserDetails" : [
	{
	"slno" : "0114052019",
	"type" : "Type1- MSD213341278",
	"time" : "07:20",
	"time25" : "07:25",
	"time29" : "07:29",
	"time40" : "07:40",
	"time840" : "08:40",
	"time10" : "10:00",
	"time1120" : "11:20",
	"time1425" : "14:25",
	"time1455" : "14:55",
	"time1545" : "15:45",
	"time1640" : "16:40",
	"time1700" : "17:00",
	"time1920" : "19:20",
	"time2300" : "23:00"
	},

    {
        "id": '13',
        "superVisorId": '1   3',
        "machineType": "1234",
        "machineNumber": "1234456",
        "startTime": null,
        "endTime": null,
        
    }
   
	]}
	res.send(JSON.stringify(data));
});

module.exports = router;
