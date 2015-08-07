import Ember from 'ember';

export default Ember.Controller.extend({
    application: Ember.inject.controller("application"),
    setupModel(objectType) {
        var that = this;
        this.get("application").get("modelPromise").then(function() {
            that.set("modelDef", that.store.peekRecord("ObjectType", objectType));
            that.set("model", that.store.findAll(objectType.capitalize()));
        });
    }
});
