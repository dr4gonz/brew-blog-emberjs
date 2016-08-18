import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.query('post', {
        orderBy: 'date'
      }).then((response) => {
        return response.toArray().reverse().slice(this.startIndex, this.startIndex+5);
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
    changeStartIndex(direction) {
      if (direction === 'next') {
        this.startIndex += 5;
      }
      if (direction === 'prev' && this.startIndex !== 0) {
        this.startIndex -= 5;
      }
      this.refresh();
    }
  },
  startIndex: 0
});
