'use strict';

var module = require('../src/hbs-html-tag-helpers');
var template = require('../test/createTagBlock.hbs');
var assert = chai.assert;

describe('Your Module', function () {

    it('is a module', function () {
        assert.ok(true);
    });
});

describe('Template', function () {

    it('createTagBlock', function () {
        assert.ok(true);
        var myDiv = document.createElement('div');
        myDiv.innerHTML = 'Hey';
        document.body.appendChild(myDiv);

    });
});


