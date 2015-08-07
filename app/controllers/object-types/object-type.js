import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addField: function() {
            var newField = prompt("enter a field name");
            var model = this.get("model");
            var fields = Ember.copy(model.get("fields"));
            fields.push(newField);
            model.set("fields", fields);
        }
    }
});
