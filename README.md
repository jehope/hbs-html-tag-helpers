# hbs-html-tag-helpers

Manipulate html structure with json data and handlebars. 


Example:
Handlebars template
'''html
{{#each data}}
	{{createTagBlock}} 
{{/each}}
'''

Data(json)
'''javascript
"data" : [
	{ "tag" : "h1", "value" : "Email:"},
	{ "tag" : "a" , "value" : "info@domain.com"},
	{ "tag" : "h1", "value" : "Twitter"},
	{ "tag" : "a" , "value" : "@twitter", "href" : "http://twitter.com/twitter"},
	{ "tag" : "h1", "value" : "Address"},
	{ "tag" : "p" , "value" : "Joe Yo<br/>1234 addy st<br/>Brooklyn, NY 30033"},
	{ "tag" : "p" , "value" : "929.333.1111"},
	{ "tag" : "img", "value" : "http://placehold.it/1000x400&text=Image"}
]
'''