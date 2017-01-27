/**
 * VIEW: Comment Add
 *
 */

var
    template = require('./templates/commentAdd.hbs');

module.exports = Backbone.Marionette.ItemView.extend({
  tagName: 'li',
  className: 'media',
  template: template,
  ui: {
    type: 'select[name="comment-type"]',
    comment: 'textarea[name="add-comment"]',
    send: 'button[name="send"]',
    error: '.error',
  },

  events: {
    'click @ui.send': 'addComment'
  },

  modelEvents: {
    "change": "render"
  },


  templateHelpers: {
    getTypes: function() {
      return hackdash.commentTypes && hackdash.commentTypes.map(function(e){
        return {value: e, title: __('comment-type-' +e)};
      });
    }
  },

  addComment: function() {
    var self = this;
    var toSave = {
      type: self.ui.type.val(),
      comment: self.ui.comment.val()
    };

    console.log('new comment', toSave);
    $('[name="send"]', self.$el).button('loading');

    self.model
      .save(toSave,{silent:true})
      .success(function(){
        $('[name="send"]', self.$el).button('reset');
        $('.error', self.$el).text('');
        self.model.trigger('change');
        console.log('ok');
      })
      .error(function(err){
        $('[name="send"]', self.$el).button('reset');
        $('.error', self.$el).text(err.responseText);
        // self.model.trigger('change');
      });
  },

});
