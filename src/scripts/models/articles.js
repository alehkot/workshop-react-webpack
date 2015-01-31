'use strict';

var _ = require('underscore');
var $ = require('jquery/dist/jquery');

var Article = function(name) {
    this.id = _.uniqueId();
    this.name = name;
    this.text = name;
    this.isEditingName = false;
};

var articles = {
	updated: $.Callbacks(),

    all: [
        new Article('Article 1'),
        new Article('Article 2')
    ],

    addNew: function() {
    	var article = new Article('new Article');
    	article.isEditingName = true;
    	this.all.unshift(article);
    	this.updated.fire();
    },

    updateArticle: function(id, name) {
    	var article = _.findWhere(this.all, {id: id});
    	article.name = name;
    	article.text = name;
    	article.isEditingName = false;
    	this.updated.fire();
    }

};

module.exports = articles;
