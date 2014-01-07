'use strict';

var Handlebars = require("hbsfy/runtime");
var tagReturn,link;

/*********************
 *  HTML Tag Helper  *
 *********************/

Handlebars.registerHelper('createTagBlock', function() {
	// if tag is a link
	if(this.tag === 'a') {
		link = (this.href) ? this.href : this.value;
		tagReturn = '<'+this.tag + ' href="'+link+'" >' + this.value + '</'+this.tag+ '>';
	}
	// if tag is an image
	else if ( this.tag === 'img') {
		tagReturn = '<'+this.tag + ' src="'+this.value+'" />';
	}
	// all other tags TODO: some more tags need attention ie. iframe.
	else {
		tagReturn = '<'+this.tag + '>' + this.value + '</'+this.tag+ '>';
	}	
  return new Handlebars.SafeString(tagReturn);
});

module.exports = {};
