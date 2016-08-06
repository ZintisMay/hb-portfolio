function proto(title, body, people){
	this.title = title;
	this.body = body;
	this.people = people;
}

var object = new proto('z', 'b', ['m', 'k']);
var object2 = new proto('m', 's', ['3', 'k']);
console.log(object);
console.log(object2.people);