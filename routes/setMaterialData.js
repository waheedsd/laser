var express = require('express');
var fs = require('fs');
// var data = fs.writeFileSync(data.json);
var router = express.Router();

var Material_Data = {
  "test" : "result",
  "sample" : "sampleresult"
}
/* GET home page. */
router.post('/', function(req, res, next) {
  
  
  // res.send("Material_Data");
  console.log('body: ' + JSON.stringify(req.body));
  console.log("success");
	res.send(req.body);
});

module.exports = router;
