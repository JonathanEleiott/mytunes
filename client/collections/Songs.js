// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var that = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      
      success: function(data) {
        for (var i = 0; i < data.results.length; i++) {
          that.add(data.results[i]);
        }
        that.trigger('success');
      },

      error: function() {
        console.log('error');
      }
    });
  }

});