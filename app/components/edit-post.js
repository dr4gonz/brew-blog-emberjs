import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  routing: Ember.inject.service('-routing'),
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
        var comment_deletions = post.get('comments').map(function(comment){
          return comment.destroyRecord();
        });
        Ember.RSVP.all(comment_deletions).then(function() {
          return post.destroyRecord();
        });
      }
      this.get("routing").transitionTo("index");
    }
  }
});
