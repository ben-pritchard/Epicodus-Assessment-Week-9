Email.Router.map(function() {
  this.resource('inbox', {path: "/"}, function() {
    this.resource('new-message');
  });
  this.resource('message', {path: "/message/:message_id"});
});
