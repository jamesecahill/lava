import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition() {
            this.controller.setupModel(this.paramsFor(this.get("routeName")).object_type);
        }
    }
});
