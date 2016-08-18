import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    showUpdateForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
      };
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key, params[key]);
        }
      });
      this.set('updatePostForm', false);
      post.save();
    },
    deletePost(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        post.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
