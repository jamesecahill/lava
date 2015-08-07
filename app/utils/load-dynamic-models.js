import DS from 'ember-data';

var buildDynamicModel = function(modelMeta) {
    var modelConfig = {};

    modelMeta.get("fields").map(function(field) {
        modelConfig[field] = DS.attr();
    });

    return DS.Model.extend(modelConfig);
}

export default function loadDynamicModels(NS, store) {
    return store.findAll("ObjectType").then(function(recs) {
        recs.map(function(item, idx, enumerable){
            NS[item.get("id").capitalize()] = buildDynamicModel(item);
        });
    });
}
