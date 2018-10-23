// create new functions

// create new variables

// make a loop

// make a condition

// console log something

// call a function
var dinosaurCount = 0;
var volunteers = true;

for (var i = 0; i < 8; i = i + 2) {
	console.log(i);
	var dinosaur = 't rex';


	if (volunteers === true) {
		increaseDinosaurCount();
	}
	console.log(dinosaurCount);
}

function increaseDinosaurCount() {
	dinosaurCount++;
}