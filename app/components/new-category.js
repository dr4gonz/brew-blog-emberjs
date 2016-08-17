import Ember from 'ember';

export default Ember.Component.extend({
  showNewCategoryForm: false,
  actions: {
    showForm() {
      this.set('showNewCategoryForm', true);
    },

    createCategory() {
      var params = {
        name: this.get('name')
      };
      this.set('name', '');
      this.set('showNewCategoryForm', false);
      this.sendAction('createCategory', params);
    }
  }
});
