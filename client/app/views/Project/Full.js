/**
 * VIEW: Full Project view
 * 
 */
 
var template = require('./templates/full.hbs');

module.exports = Backbone.Marionette.ItemView.extend({

  //--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------

  id: function(){
    return this.model.get("_id");
  },

  className: "project tooltips",
  template: template,

  modelEvents: {
    "change": "render"
  },

  //--------------------------------------
  //+ INHERITED / OVERRIDES
  //--------------------------------------

  onRender: function(){
    this.$el
      .addClass(this.model.get("status"))
      .attr({ "title": this.model.get("status") })
      .tooltip({});

    window.hackdash.seo
      .title(this.model.get('title'))
      .desc(this.model.get('description'));

    $('.tooltips', this.$el).tooltip({});
  }

  //--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------

  //--------------------------------------
  //+ EVENT HANDLERS
  //--------------------------------------

  //--------------------------------------
  //+ PRIVATE AND PROTECTED METHODS
  //--------------------------------------

});