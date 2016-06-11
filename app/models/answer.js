import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  text: DS.attr(),
  date: DS.attr(),
  blog: DS.belongsTo('question', {async: true})
});
