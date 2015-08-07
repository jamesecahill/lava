import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('objectTypes', function() {
    this.route('objectType', {
        path: ':objectTypeId'
    });
  });

  this.route('objects', {
    path: '/objects/:object_type'
  });
});

export default Router;
