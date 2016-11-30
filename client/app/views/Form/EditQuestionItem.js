/**
 * VIEW: Question List
 *
 */

var
    template = require('./templates/editQuestionItem.hbs');

module.exports = Backbone.Marionette.ItemView.extend({

	template: template,

	templateHelpers: {
		fa: function(type) {
			switch(type) {
				case 'text':
					return 'pencil';
				case 'textarea':
					return 'align-left';
        case 'boolean':
          return 'check-square-o';
        case 'select':
          return 'list';
        case 'range':
          return 'sliders';
        case 'geocoder':
          return 'globe';
				case 'file':
					return 'file-o';
				default:
					return 'edit';
			}
		}
	},

});
