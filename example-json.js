var person = {
	name: 'Sandra',
	age: 23
};

// Convert person to JSON
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

// Convert JSON object back into a Javascript object
var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

console.log('- - - - - - - ')

var animal = '{"name": "Clio"}';
// Convert JSON object back into a Javascript object
var animalObject = JSON.parse(animal);
console.log(animalObject.name);
console.log(typeof animalObject);

// Convert animal to JSON

var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);