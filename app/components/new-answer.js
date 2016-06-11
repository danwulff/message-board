import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        question: this.get('question'),
      };
      this.sendAction('save', params);
    }
  }
});
