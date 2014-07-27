
/*
 * GET home page.
 */
exports.load = function(req, res){
  res.render('../public/index', { title: 'Express' });
};

exports.test = function(req, res){
  var data = {};
  data.datas = [
	{id: 'tony2014-01-03-0800', name: 'tony', date: '2014/01/03', day: '三', time: '08:00~12:00', loc: 'NTU', hr: 4, people: 10, sallery: 40000, qualify: 'yes'},
	{id: 'tom2014-01-04-1000', name: 'tom', date: '2014/01/04', day: '四', time: '10:00~14:00', loc: 'NCCU', hr: 4, people: 6, sallery: 35000, qualify: 'yes'},
	{id: 'anny2014-01-01-0630', name: 'anny', date: '2014/01/01', day: '一', time: '06:30~09:00', loc: 'NTU', hr: 2.5, people: 6, sallery: 80000, qualify: 'yes'},
	{id: 'tim2014-01-10-1300', name: 'tim', date: '2014/01/10', day: '三', time: '13:00~15:00', loc: 'NCCU', hr: 2, people: 8, sallery: 50000, qualify: 'yes'},
	{id: 'jane2014-01-06-0930', name: 'jane', date: '2014/01/06', day: '六', time: '09:30~11:30', loc: 'MIT', hr: 2, people: 9, sallery: 60000, qualify: 'no'}
  ];

  var result = [];
  data.datas.forEach(function (item, i) {
    result.push({
      name: item.name,
      date: item.date,
      time: item.time,
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
  {id: 'tony2014-01-03-0800', name: 'tony', date: '2014/01/03', day: '三', time: '08:00~12:00', loc: 'NTU', hr: 4, people: 10, sallery: 40000, qualify: 'yes'},
  {id: 'tom2014-01-04-1000', name: 'tom', date: '2014/01/04', day: '四', time: '10:00~14:00', loc: 'NCCU', hr: 4, people: 6, sallery: 35000, qualify: 'yes'},
  {id: 'anny2014-01-01-0630', name: 'anny', date: '2014/01/01', day: '一', time: '06:30~09:00', loc: 'NTU', hr: 2.5, people: 6, sallery: 80000, qualify: 'yes'},
  {id: 'tim2014-01-10-1300', name: 'tim', date: '2014/01/10', day: '三', time: '13:00~15:00', loc: 'NCCU', hr: 2, people: 8, sallery: 50000, qualify: 'yes'},
  {id: 'jane2014-01-06-0930', name: 'jane', date: '2014/01/06', day: '六', time: '09:30~11:30', loc: 'MIT', hr: 2, people: 9, sallery: 60000, qualify: 'no'}
  ];

  //console.log(req.body.salleryid);

  var result = {};
  data.datas.forEach(function (item, i) {
    if(item.id == req.body.salleryid){
      result.name = item.name,
      result.date = item.date,
      result.day = item.day,
      result.time = item.time,
      result.loc = item.loc,
      result.hr = item.hr,
      result.people = item.people,
      result.sallery = item.sallery,
      result.qualify = item.qualify,
      result.id = item.id
    }
  });
  res.json({
    result: result
  });
};

exports.list = function(req, res){
	var MongoClient = require('mongodb').MongoClient;

	var mongoUri = "mongodb://pc:pccase@ds037597.mongolab.com:37597/pccase";

	MongoClient.connect(mongoUri, function(err, db) {
		if(err) { return console.dir(err); }

		var collection = db.collection('allrollcall');
		var doc = {};
		var result = [];

		var stream = collection.find(doc).stream();
		stream.on("data", function(item) {
    		result.push({
          id: item.id,
          date: item.year + "-" + item.month + "-" + item.date,
    			class: item.class,
    			teacher: item.teacher,
    			section: item.section
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