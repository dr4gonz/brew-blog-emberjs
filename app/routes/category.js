import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    deleteCategory(cat) {
      var relationship_deletions = cat.get('posts').map(function(post){
        return post.set("categories."+cat, null);
      });
      Ember.RSVP.all(relationship_deletions).then(function() {
        return cat.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
