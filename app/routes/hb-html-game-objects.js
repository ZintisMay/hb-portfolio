function hbproto(title, icon, description, mechanics, paragraph, imgsrc){
		this.title = title;
		this.icon = icon;
		this.description = description;
		this.mechanics = mechanics;
		this.paragraph = paragraph;
		this.imgsrc = imgsrc;
	}

	
	//this is the hb data object
	var game = [];

	game[0] = new hbproto(

		"Wise Guys and Lies",

		"static/images/wgal.png",

		[{name:"A strategic bluffing card game."},{name:"2-5 Players"}, {name:"20-40 minutes"}],

		[{name: "Hand Management"}, {name: "Bluffing"}, {name: "Take That"}, {name: "Player Elimination"}, {name: "Variable Player Powers"}],

		"Ever wanted to be a mob boss? Take on your friends in this card game where nobody trusts you! Work from the shadows by paying off criminals and blackmailing politicians. Amass enough power to keep yourself safe and get your enemies in jail.",

		"static/images/pic-wgal.jpg"

	);

	game[1] = new hbproto(

		"Huts",

		"static/images/huts.jpg",

		[{name:"A game about small islands and angry gods."}, {name:"2-5 Players"}, {name:"20-40 minutes"}],

		[{name: "Hand Management"}, {name: "Secret Scoring"}, {name: "Modular Board"}, {name: "Variable Player Powers"}, {name:"Grid Movement"}],

		"Become a god in this game that harkens back to classics like Populous and Black & White. Become a member of a small pantheon of islander gods as you favor the tribes that worship you and smite the ones that don't.",

		"static/images/pic-huts.jpg"

	);

	game[2] = new hbproto(

		"Cave Paintings",

		"static/images/cp.png",

		[{name:"A party game about drawing like a neanderthal."}, {name:"4-8 Players"}, {name:"5 minutes per player"}],

		[{name: "Drawing"}, {name: "Hand Management"}],

		"Your jobs as University Archaeologists are in danger! The university is facing budget cuts, and only one professor will be kept in the department! I mean, nobody was doing any research anyway, but you have to try and keep your job! Make fraudulent cave paintings depicting what ancient man was like, and have your colleagues peer review them to add to their credibility. Whomever has the most credibility at the end of the game gets tenure!",

		"static/images/pic-cp.jpg"

	);

	game[3] = new hbproto(

		"Belief in the Old Gods",

		"static/images/BITOGtitle.png",

		[{name:"A game about the Old Gods and the cultists who love them."}, {name:"2-5 Players"}, {name:"30 minutes"}],

		[{name: "Hand Management"}, {name: "Secret Scoring"}, {name: "Modular Board"}, {name: "Variable Player Powers"}, {name:"Grid Movement"}],

		"The Old Gods never truly die, they slumber beath the waves and among the stars. Play as one of the eldrich abominations of the universe, twisting the minds of men to your will. The first Old God to awaken from their slumber will harken the end of days!<br>This game is a re-themeing of Huts into the Lovecraft universe!",

		"static/images/BITOG.jpg"

	);

	

	module.exports = game;