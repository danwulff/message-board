import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        text: this.get('text'),
      };
      this.sendAction('save', params);
    }
  }
});
