import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    createPost(params) {
      var newPost = this.store.createRecord('post', params);
      var categories = params.category;
      newPost.save();
      categories.forEach(function(category){
        category.get('posts').addObject(newPost).then(function(){
          category.save();
        });
      });
      this.transitionTo('index');
    }
  }
});
