import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

export default Ember.Route.extend({
    model: function() {
        // var NS = eval(config.modulePrefix.capitalize());
        // NS.NewModel = DS.Model.extend({
        //     name: DS.attr()
        // });
        // this.store.findAll("NewModel");
        return this.store.findAll("ObjectType");
    }
});
