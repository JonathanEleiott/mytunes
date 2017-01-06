// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      //if you want the song to play right away 
      //upon adding it to the song queue and pass all tests 
      //then uncomment line 15
      
      // this.model.play();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
