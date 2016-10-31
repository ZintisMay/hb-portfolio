function hbproto(title, paragraph, person, imgsrc, url){
		this.title = title;
		this.paragraph = paragraph;
		this.person = person;
		this.imgsrc = imgsrc;
		this.url = url; 
	}

	//not being used
	var experimental = {
		title: "Word Wars!",
		paragraph: "This is a typing game created by our small team of web developers. It features a library of words from the Wordnik API, high scores stored in MySql, fun graphic and sound design. We used Firebase for user authentication, dynamic room creation, a chat service, and multiplayer interaction. We are very proud of our product created in just a few weeks, and intend to continue working on it by adding features in the future.",
		person: [
		{image:"static/images/Lou.png", name:"Louis Delia"},
		{image:"static/images/Matt.png", name:"Matthew Martin"},
		{image:"static/images/Ana.png", name:"Analben Manakiwala"}
		],
		imgsrc:"static/images/wordwars.png",
		url: "http://wordwarsapp.herokuapp.com"
	}
	
	//this is the hb data object
	var experiment = [];

	experiment[1] = new hbproto(
		"Word Wars",
		"This is a typing game created by our small team of web developers. It features a library of words from the Wordnik API, high scores stored in MySql, fun graphics and sound design. We used Firebase for user authentication, dynamic room creation, a chat service, and multiplayer interaction. We are very proud of our product created in just a few weeks, and intend to continue adding features in the future.",
		[
			{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAe2AAAAJDdjN2NiMmYyLTFhYjUtNDNlYS1hOWE2LTI0OTgxYTY0ZjVhNw.jpg", name:"Louis Delia", url:"https://www.linkedin.com/in/ltdelia?authType=NAME_SEARCH&authToken=8yFf&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CentityType%3AentityHistoryName%2CclickedEntityId%3Amynetwork_186727910%2Cidx%3A2"},
			{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjDAAAAJDA0ZDNiNTdiLTAxODQtNGRjMC1iYTQzLTUxZGFkYzBhYTQxOA.jpg", name:"Matthew Martin", url:"https://www.linkedin.com/in/mnmartin?authType=NAME_SEARCH&authToken=Ptlf&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A53404974%2CauthType%3ANAME_SEARCH%2Cidx%3A1-2-2%2CtarId%3A1470613010323%2Ctas%3Am"},
			{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAScAAAAJDdmZmMyYzZjLTA5ZGUtNGRiNi05ZTM0LWE1ZDAyYmY2ZjlmNw.jpg", name:"Analben Manakiwala", url:"https://www.linkedin.com/in/analben-manakiwala?authType=NAME_SEARCH&authToken=k1_c&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A483145149%2CauthType%3ANAME_SEARCH%2Cidx%3A1-2-2%2CtarId%3A1470612984683%2Ctas%3Aa"}
		],
		"static/images/wordwars.png",
		"http://wordwarsapp.herokuapp.com"
	);

	experiment[2] = new hbproto(
		"Poem<br>Comber", 
		"This application was built to allow teachers and students to communally learn from and dissect literature. Students and Professors log into their accounts, where Professors will create assignments for the students to critique by clicking on passages and leaving comments. Comments are available for everyone to see. We used JSON web tokens, Node.js, Bootstrap, and MySql for storing the accounts, texts, and individual comments.", 
		[
			{image:"http://sjgraboski.com/wp-content/uploads/2016/06/headshot.jpg", name:"Steve Graboski", url:"https://www.linkedin.com/in/sjgraboski?authType=NAME_SEARCH&authToken=54NY&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A133967732%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1470613252610%2Ctas%3Asteve"},
			{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAcwAAAAJGI0OGNmOGRlLTQxNzktNGI3Mi04OGZlLTA0NjdlZjhkNGZkMw.jpg",name:"Andrew Vanderhoff", url:"https://www.linkedin.com/in/andrew-vanderhoff-37008820?authType=NAME_SEARCH&authToken=E37E&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A71843844%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1470613278275%2Ctas%3Aa"},
			{image:"static/images/Ana.png",name:"Analben Manakiwala",url:"https://www.linkedin.com/in/analben-manakiwala?authType=NAME_SEARCH&authToken=k1_c&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A483145149%2CauthType%3ANAME_SEARCH%2Cidx%3A1-2-2%2CtarId%3A1470612984683%2Ctas%3Aa"}
		], 
		"static/images/pcomber.png",
		"https://poemcomber.herokuapp.com"
	);

	experiment[3] = new hbproto(
		"Community<br>Code", 
		"This application is designed to give beginning programmers a library of functions they can reference, curate, and learn from. We developed this as a way to help our classroom learning as we delved into Rutgers Coding Bootcamp. Many of the students in the class contributed to it, and I found it an easy way to learn useful functions from other students.", 
		[
			{image:"https://media.licdn.com/media/AAEAAQAAAAAAAAiOAAAAJDc5N2VkNWRlLWM4NWItNGQ5MC1hN2ExLWRlZGVhNTFiM2NjMg.jpg", name:"Kevin Graber", url:"https://www.linkedin.com/in/kevin-graber-310?authType=NAME_SEARCH&authToken=bGpb&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A423997440%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1470613273776%2Ctas%3Akevin"},
			{image:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiuAAAAJDVlMjgxZjE4LTNmOTItNDI2ZS1iZDE3LTQxYjM4ZmZkYmJiZA.jpg",name:"Mauricio Ramos", url:"https://www.linkedin.com/in/maramos1126?authType=NAME_SEARCH&authToken=xByp&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A163957937%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1470613259426%2Ctas%3Amau"}
		], 
		"static/images/ccode.png",
		"http://communitycode.herokuapp.com/"
	);

	experiment[4] = new hbproto(

		"Hangman",
		"This was the first webpage I ever made using javascript. Even looking back now I'm kind of pleased with myself. Learning how to mess with the DOM and work with audio was a lot of fun!",
		null,
		"static/images/hman.png",
		"http://hangman-z.herokuapp.com/"

	);


	experiment[5] = new hbproto(

		"Your Love Life",
		"In college, my friend Nik made an art-infographic for class by creating circular charts showing the dating histories of her friends and family. Your-love-life is a modern web-based application able to make those very same infographics. Utilizing Angular, d3.js, and mongoDB, this application gives users a colorful look at their love lives.",
		[{image:"static/images/niko.jpg", name:"Nik Guinta", url:"https://www.linkedin.com/in/nikography"}],
		"static/images/yll.png",
		"http://your-love-life.herokuapp.com/"

	);


	module.exports = experiment;