exports.loadAttendance = function(req, res){
  var MongoClient = require('mongodb').MongoClient;

  var mongoUri = "mongodb://pc:pccase@ds037597.mongolab.com:37597/pccase";

  MongoClient.connect(mongoUri, function(err, db) {
    if(err) { return console.dir(err); }

    var collection = db.collection('allclass');
    var doc = {};
    var result = {};

    var stream = collection.find(doc).stream();
    stream.on("data", function(item) {
      if(req.body.classid == item.id){
        result.attendance = item.attendance;
      }
    });
    stream.on("end", function() {
      res.json({
        result: result
      });
      db.close();
    });
  });
};

