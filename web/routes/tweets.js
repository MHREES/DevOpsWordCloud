var express = require('express');
var neo4j = require('neo4j-driver').v1;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", process.env.NEO4J_PASSWORD));
  var session = driver.session();
  session
    .run( "MATCH (n:Hashtag)-[r]-() RETURN n.name, count(r) as rel_count ORDER BY rel_count DESC LIMIT 50" )
    .then( function( result ) {
      session.close();
      driver.close();
      var output=[];
      result.records.forEach(function(record) {
        var message = {}
        message.text = record._fields[0];
        message.size= record._fields[1].low;
        output.push(message);
      });
      res.json(output);
    });
});

module.exports = router;
