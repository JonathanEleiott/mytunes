// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    // console.log(this.collection);
    this.$el.children().detach();
    if (this.collection) {
      this.$el.html('<th>Song Queue</th>').append(
        this.collection.map(function(song) {
          new SongQueueEntryView(song);
        })
      );
    }

    return this.$el;
  }
});
