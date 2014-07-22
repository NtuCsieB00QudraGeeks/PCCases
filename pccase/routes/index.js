
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('../public/index', { title: 'Express' });
};

exports.test = function(req, res){
  var data = {};
  data.datas = [
	{id: 'tony2014-01-03-0800', name: 'tony', date: '2014/01/03-Wed', loc: 'NTU', time: '08:00~12:00', sallery: 40000},
	{id: 'tom2014-01-04-1000', name: 'tom', date: '2014/01/04-Thur', loc: 'NCCU', time: '10:00~14:00', sallery: 35000},
	{id: 'anny2014-01-01-0645', name: 'anny', date: '2014/01/01-Mon', loc: 'NTU', time: '06:45~09:00', sallery: 80000},
	{id: 'tim2014-01-10-1300', name: 'tim', date: '2014/01/10-Wed', loc: 'NCCU', time: '13:00~15:00', sallery: 50000},
	{id: 'jane2014-01-06-0930', name: 'jane', date: '2014/01/06-Sat', loc: 'MIT', time: '09:30~11:30', sallery: 60000}
  ];

  var result = [];
  data.datas.forEach(function (item, i) {
    result.push({
      name: item.name,
      date: item.date,
      sallery: item.sallery,
      id: item.id
    });
  });
  res.json({
    result: result
  });
};

exports.detail = function(req, res){
  var data = {};
  data.datas = [
  {id: 'tony2014-01-03-0800', name: 'tony', date: '2014/01/03-Wed', loc: 'NTU', time: '08:00~12:00', sallery: 40000},
  {id: 'tom2014-01-04-1000', name: 'tom', date: '2014/01/04-Thur', loc: 'NCCU', time: '10:00~14:00', sallery: 35000},
  {id: 'anny2014-01-01-0645', name: 'anny', date: '2014/01/01-Mon', loc: 'NTU', time: '06:45~09:00', sallery: 80000},
  {id: 'tim2014-01-10-1300', name: 'tim', date: '2014/01/10-Wed', loc: 'NCCU', time: '13:00~15:00', sallery: 50000},
  {id: 'jane2014-01-06-0930', name: 'jane', date: '2014/01/06-Sat', loc: 'MIT', time: '09:30~11:30', sallery: 60000}
  ];

  //console.log(req.body.salleryid);

  var result = {};
  data.datas.forEach(function (item, i) {
    if(item.id == req.body.salleryid){
      result.name = item.name,
      result.date = item.date,
      result.sallery = item.sallery,
      result.loc = item.loc,
      result.time = item.time,
      result.id = item.id
    }
  });
  res.json({
    result: result
  });
};

exports.list = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	var mongoUri = "mongodb://aaa:aaa@ds033317.mongolab.com:33317/smallbun";

	MongoClient.connect(mongoUri, function(err, db) {
		if(err) { return console.dir(err); }

		var collection = db.collection('allclass');
		var doc = {};
		var result = [];

		var stream = collection.find(doc).stream();
		stream.on("data", function(item) {
    		result.push({
    			name: item.class_name,
    			date: item.teacher_name,
    			sallery: item.semester
    		});
    	});
    	stream.on("end", function() {
    		res.json({
    			result: result
    		});
    		db.close();
    	});
	});
};