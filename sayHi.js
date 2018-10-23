var name = "Joel"

function sayHi() {
	console.log("Hi!", name) // Hi! Joel
}

function sayHi2() {
	name = "Solomon"
	console.log("Hi!", name) // Hi! Solomon
}

function sayHi3() {
	var name = "Bobby"
	console.log("Hi!", name) // Hi! Solomon
}

sayHi2() // Hi! Solomon
sayHi() // Hi! Solomon