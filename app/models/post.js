import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  category: DS.hasMany('category', {async: true}),
  comments: DS.hasMany('comment', {async:true})
});
