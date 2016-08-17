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
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    },
    deletePost(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
