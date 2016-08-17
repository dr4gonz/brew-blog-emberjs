import Ember from 'ember';

export default Ember.Component.extend({
  selectedCategories: [],
  actions: {
    createPost() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        author: this.get('author'),
        category: this.selectedCategories
      };
      // categories.forEach(function(category){
      //   console.log('categoryChecked'+category.id);
      // });
      this.sendAction('createPost', params);
    },
  }
});
