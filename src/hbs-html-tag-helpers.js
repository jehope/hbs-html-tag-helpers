'use strict';

var Handlebars = require("hbsfy/runtime");

Handlebars.registerHelper('createTagBlock', function() {
	if(this.tag === 'a') {
		var link = (this.href) ? this.href : this.value;
		var tagReturn = '<'+this.tag + ' href="'+link+'" >' + this.value + '</'+this.tag+ '>';
	}
	else if ( this.tag === 'img') {
		var tagReturn = '<'+this.tag + ' src="'+this.value+'" />';
	}
	else {
		var tagReturn = '<'+this.tag + '>' + this.value + '</'+this.tag+ '>';
	}	
  return new Handlebars.SafeString(tagReturn);
});

module.exports = {};
