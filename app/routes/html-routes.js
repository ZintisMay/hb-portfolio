// Dependencies
var express = require('express');
var path = require('path');

var app = express();

module.exports = function(app){

	//PAGES

	function hbproto(title, paragraph, person, imgsrc, url){
		this.title = title;
		this.paragraph = paragraph;
		this.person = person;
		this.imgsrc = imgsrc;
		this.url = url; 
	}

	var experiment = {
		title: "Word Wars!",
		paragraph: "Is a typing game created by our small team of web developers. It features a library of words from the Wordnik API, high scores stored in MySql, fun graphic and sound design. We used Firebase for user authentication, dynamic room creation, a chat service, and multiplayer interaction. We are very proud of our product created in just a few weeks, and intend to continue working on it by adding features in the future.",
		person: [
		{image:"static/images/Lou.png", name:"Louis Delia"},
		{image:"static/images/Matt.png", name:"Matthew Martin"},
		{image:"static/images/Ana.png", name:"Analben Manakiwala"}
		// {image:"http://imgur.com/a/1bZOH/", name:"Cave Paintings"}
		],
		imgsrc:"static/images/wordwars.png",
		url: "http://wordwarsapp.herokuapp.com"
	}

	var experiment2 = new hbproto("Poem<br>Comber", "This application was built to allow teachers and students to communally learn from and dissect literature. Students and Professors log into their accounts, where Professors will create assignments for the students to critique by clicking on passages and leaving comments. Students have access to all other student's comments. We used JSON web tokens, MySql for storing the accounts, texts, and comments, Node.js and Bootstrap.", [{image:"http://sjgraboski.com/wp-content/uploads/2016/06/headshot.jpg", name:"Steve Graboski"},{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAcwAAAAJGI0OGNmOGRlLTQxNzktNGI3Mi04OGZlLTA0NjdlZjhkNGZkMw.jpg",name:"Andrew Vanderhoff"},{image:"static/images/Ana.png",name:"Analben Manakiwala"}], "static/images/pcomber.png","https://poemcomber.herokuapp.com");

	var experiment3 = new hbproto("Community<br>Code", "This application is designed to give beginning programmers a library of functions they can reference, curate, and learn from. We developed this as a way to help our classroom learning as we delved into Rutgers Coding Bootcamp. Many of the students in the class contributed to it, and I found it an easy way to learn useful functions from other students.", [{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfgAAAAJGVmOGNmOTZlLWVlNjQtNDRiMS1hY2MzLTY0N2FiN2Q3MTM4OQ.jpg", name:"Kevin Graber"},{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiuAAAAJDVlMjgxZjE4LTNmOTItNDI2ZS1iZDE3LTQxYjM4ZmZkYmJiZA.jpg",name:"Mauricio Ramos"}], "static/images/ccode.png","http://communitycode.herokuapp.com/");

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
		res.render('wordwars', experiment);
	});
	app.get('/poemcomber', function(req, res){
		res.render('wordwars', experiment2);
	});
	app.get('/communitycode', function(req, res){
		res.render('wordwars', experiment3);
	});


	app.get('/', function(req, res){
		res.render('portfolio');
	})
	

}