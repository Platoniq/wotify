/**
 * Optional fields for Form Editor field type 'Checkbox'
 */

var template = require('./templates/questionOptionsCheckbox.hbs');

module.exports = Backbone.Marionette.ItemView.extend({
  template: template,

  ui: {
    'options': 'textarea',
    'multiple': 'input[type=checkbox]',
  },

  templateHelpers: function() {
    var options = this.model.get('options') || {};
    return {
      options: function() {
        return options.values ? options.values.join("\n") : '';
      },
      multiple: function() {
        return !!options.multiple;
      }
    };
  },

  getOptions: function() {
    var val = this.ui.options.val();
    var mult = this.ui.multiple.is(':checked');
    return {
      multiple: mult,
      values: val.match(/[^\r\n]+/g)
    };
  }
});
