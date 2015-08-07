import DS from 'ember-data';

var ObjectType = DS.Model.extend({
    fields: DS.attr(),
    fieldsUpdated: function() {
        if (this.get("fieldsUpdatedFirstTime") === true) {
            console.log("fields updated");
        } else {
            this.set("fieldsUpdatedFirstTime", true);
        }
    }.observes("fields")
});

export default ObjectType;
