import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    showCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      comment.save();
      this.set('updateCommentForm', false);
    },
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
