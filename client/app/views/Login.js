/**
 * VIEW: Login Modal
 *
 */

var template = require('./templates/login.hbs');
var Register = require("./Register");
var Forgot = require("./Forgot");

module.exports = Backbone.Marionette.ItemView.extend({

  //--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------

  className: "login",
  template: template,

  ui: {
    "errorHolder": "#login-errors"
  },

  events: {
    "click .register": "register",
    "click .lostpass": "lostPassword",
    "click .close": "destroy"
  },

  //--------------------------------------
  //+ INHERITED / OVERRIDES
  //--------------------------------------

  initialize: function(options){
    this.flashError = (options && options.model && options.model.attributes && options.model.attributes.flashError) || '';
    this.flashMessage = (options && options.model && options.model.attributes && options.model.attributes.flashMessage) || '';
  },

  templateHelpers: function() {
    var flashError = this.flashError;
    var flashMessage = this.flashMessage;
    return {
      showErrors: function(){
        return flashError;
      },
      showMessages: function(){
        return flashMessage;
      },
      redirectURL: function(){
        var url = hackdash.app.previousURL || '';
        return (url.length ? '?redirect=' + url : url);
      }
    };
  },

  //--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------

  //--------------------------------------
  //+ EVENT HANDLERS
  //--------------------------------------

  register: function(){
    var flashError = this.flashError;
    hackdash.app.modals.show(new Register({
        model: new Backbone.Model({
          flashError: flashError
         })
      }));
    this.destroy();
  },

  lostPassword: function(){
    var flashError = this.flashError;
    var flashMessage = this.flashMessage;
    hackdash.app.modals.show(new Forgot({
        model: new Backbone.Model({
          flashError: flashError,
          flashMessage: flashMessage,
         })
      }));
    this.destroy();
    return false; // do not follow routes
  }

  //--------------------------------------
  //+ PRIVATE AND PROTECTED METHODS
  //--------------------------------------

});