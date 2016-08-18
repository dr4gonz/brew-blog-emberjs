import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  selectedCategories: [],
  actions: {
    createPost() {
      console.log(moment());
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: moment().format('h:mm a, M/D/YYYY'),
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
