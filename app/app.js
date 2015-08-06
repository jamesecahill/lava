import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
});

loadInitializers(App, config.modulePrefix);

App.instanceInitializer({
    name: "Init",
    initialize: function(instance) {
        //TODO hookup model creation code here.
        console.log(instance.container.lookup("store:main"));
    }
});

export default App;
