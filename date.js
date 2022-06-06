/*We are going to create our own module*/

function getDate() {
	let today = new Date();
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	}
	return today.toLocaleDateString("en-US",options);
}

function getDay() {
	let today = new Date();
	let options = {
		weekday: "long",
	}
	return today.toLocaleDateString("en-US",options);
}

exports.getDate = getDate;
exports.getDay = getDay;
