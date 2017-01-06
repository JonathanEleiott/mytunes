// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    if (this.collection) {
      this.$el.html('<th>Song Queue</th>').append(
        this.collection.map(function(song) {
          return new SongQueueEntryView({model: song});
        })
      );
    } else {
      this.$el.html('<th>Song Queue</th>');
    }
    
    return this.$el;
  }
});
