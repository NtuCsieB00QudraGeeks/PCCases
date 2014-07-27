// add class and teacher to collection 'classAndTeacher' if there is a new one
exports.buildrollcall1 = function(req, res){
  var MongoClient = require('mongodb').MongoClient;

  var mongoUri = "mongodb://pc:pccase@ds037597.mongolab.com:37597/pccase";

  MongoClient.connect(mongoUri, function(err, db) {
    if(err) { return console.dir(err); }

    var collection = db.collection('classAndTeacher');
    var doc = {class : req.body.class, teacher : req.body.teacher};

    if(req.body.initial == -1){
      collection.insert({name: "pc", class : [req.body.class], teacher : [req.body.teacher]}, {w:1}, function(err, item){
        var result = {};
        result.msg = "first time insert classAndTeacher";
        res.json({
          result: result
        });
        db.close();
      });
    }
    else{
      collection.update({name: "pc"}, {$addToSet: doc}, function(err, item) {
        var result = {};
        result.msg = "update classAndTeacher";
        res.json({
          result: result
        });
        db.close();
      }); 
    }
  });
};

// add a rollcall to collection 'allrollcall'
exports.buildrollcall2 = function(req, res){
  var MongoClient = require('mongodb').MongoClient;

  var mongoUri = "mongodb://pc:pccase@ds037597.mongolab.com:37597/pccase";

  MongoClient.connect(mongoUri, function(err, db) {
    if(err) { return console.dir(err); }

    var collection = db.collection('allrollcall');
    var doc = {
      id: req.body.id,
      teacher: req.body.teacher,
      year: req.body.year,
      month: req.body.month,
      date: req.body.date,
      class: req.body.class,
      section: req.body.section,
      student: req.body.student
    };

    collection.insert(doc, {w:1}, function(err, item){
      var result = {};
        result.msg = "build one rollcall";
        res.json({
          result: result
        });
        db.close();
    });
    
  });
};

exports.findclass = function(req, res){
  var MongoClient = require('mongodb').MongoClient;

  var mongoUri = "mongodb://pc:pccase@ds037597.mongolab.com:37597/pccase";

  MongoClient.connect(mongoUri, function(err, db) {
    if(err) { return console.dir(err); }

    var collection = db.collection('classAndTeacher');
    var doc = {};
    var result = {};
    result.class = [];
    result.teacher = [];

    var stream = collection.find(doc).stream();
    stream.on("data", function(item) {
      result.class = item.class;
      result.teacher = item.teacher;
    });
    stream.on("end", function() {
      res.json({
        result: result
      });
      db.close();
    });
  });
};

exports.showrollcall = function(req, res){
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

exports.detail = function(req, res){
  var MongoClient = require('mongodb').MongoClient;

  var mongoUri = "mongodb://pc:pccase@ds037597.mongolab.com:37597/pccase";

  MongoClient.connect(mongoUri, function(err, db) {
    if(err) { return console.dir(err); }

    var collection = db.collection('allrollcall');
    var doc = {};
    var result = {};

    var stream = collection.find(doc).stream();
    stream.on("data", function(item) {
      if(req.body.rollcallid == item.id){
        result.teacher = item.teacher;
        result.year = item.year;
        result.month = item.month;
        result.date = item.date;
        result.class = item.class;
        result.section = item.section;
        result.student = item.student;
        result.id = item.id;
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