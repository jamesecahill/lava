module.exports = function(app) {
  var express = require('express');
  var type1sRouter = express.Router();

  type1sRouter.get('/', function(req, res) {
    res.send({
      'type1s': [{
          id: "type1id1",
          field1: "field 1 value"
      }]
    });
  });

  type1sRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  type1sRouter.get('/:id', function(req, res) {
    res.send({
      'type1s': {
        id: req.params.id
      }
    });
  });

  type1sRouter.put('/:id', function(req, res) {
    res.send({
      'type1s': {
        id: req.params.id
      }
    });
  });

  type1sRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/type1s', type1sRouter);
};
