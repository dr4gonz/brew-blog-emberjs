import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        author: this.get('author'),
      };
      this.sendAction('createPost', params);
    }
  }
});
