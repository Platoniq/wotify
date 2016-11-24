/**
 * Collection: Forms
 *
 */
var
  Form = require('./Form'),
  BaseCollection = require('./BaseCollection');

var Forms = module.exports = BaseCollection.extend({

  model: Form,

  idAttribute: "_id",

  comparators: {
    title: function(a){ return a.get('title'); },
    type: function(a){ return a.get('type'); },
    created_at: function(a){ return -a.get('created_at'); },
  },

  url: function(){
    if (this.domain){
      return hackdash.apiURL + '/dashboards/' + this.domain + '/forms';
    }
    else if (this.group){
      return hackdash.apiURL + '/collections/' + this.group + '/forms';
    }
    return hackdash.apiURL + '/forms'; // Only in posts for Form.js
  },

  getActives: function(){
    return new Forms(
      this.filter(function(forms){
        return forms.get("active");
      })
    );
  }

});
