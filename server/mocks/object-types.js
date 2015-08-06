module.exports = function(app) {
  var express = require('express');
  var objectTypesRouter = express.Router();

  objectTypesRouter.get('/', function(req, res) {
    res.send({
      'ObjectTypes': [
          {
              id: 'type1',
              fields: [
                  'field1'
              ]
          }
      ]
    });
  });

  objectTypesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  objectTypesRouter.get('/:id', function(req, res) {
    res.send({
      'object-types': {
        id: req.params.id
      }
    });
  });

  objectTypesRouter.put('/:id', function(req, res) {
    res.send({
      'object-types': {
        id: req.params.id
      }
    });
  });

  objectTypesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/objectTypes', objectTypesRouter);
};
