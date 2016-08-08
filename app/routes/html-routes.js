// Dependencies
var express = require('express');
var path = require('path');

var app = express();

var experiment = require('./hb-html-page-objects.js')

console.log(experiment);

module.exports = function(app){

	//PAGES
	app.get('/home', function(req, res){
		res.render('home');
	});
	app.get('/portfolio', function(req, res){
		res.render('portfolio');
	});
	app.get('/contact', function(req, res){
		res.render('contact');
	});
	app.get('/about', function(req, res){
		res.render('about');
	});

	app.get('/wordwars', function(req, res){
		res.render('team', experiment[1]);
	});
	app.get('/poemcomber', function(req, res){
		res.render('team', experiment[2]);
	});
	app.get('/communitycode', function(req, res){
		res.render('team', experiment[3]);
	});
	app.get('/hangman', function(req, res){
		res.render('noteam', experiment[4]);
	});


	app.get('/', function(req, res){
		res.render('home');
	})
	

}