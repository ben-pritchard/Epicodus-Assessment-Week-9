Email.Message = DS.Model.extend({
  recipient: DS.attr(),
  subject: DS.attr(),
  body: DS.attr()
});
