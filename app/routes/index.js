import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.query('post', {
        limitToLast: 5,
        orderBy: 'date'
      }).then((response) => {
        return response.toArray().reverse();
      }),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    createCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },
  }
});
