import Ember from 'ember';
import loadDynamicModels from '../utils/load-dynamic-models';
import config from '../config/environment';

export default Ember.Controller.extend({
    store: Ember.inject.service("store:main"),
    setupDynamicModels: function() {
        this.set("modelPromise", loadDynamicModels(eval(config.modulePrefix.capitalize()), this.get("store")));
    }.on("init")
});
