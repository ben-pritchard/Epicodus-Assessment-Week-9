Email.NewMessageController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var newMessage = this.store.createRecord('message', {
        recipient: this.get('recipient'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      this.set('recipient', "");
      this.set('subject', "");
      this.set('body', "");
      newMessage.save();
    }
  }
});
