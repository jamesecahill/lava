import Ember from 'ember';

export function modelfield(params/*, hash*/) {
  return params[0].get(params[1]);
}

export default Ember.Helper.helper(modelfield);
