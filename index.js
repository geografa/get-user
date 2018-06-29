const moment = require('moment');
const weekOfYear = parseInt(moment().format("w"));

const obj = {};

// users active in the support queue 
let users = ['Joe','Kayla','Sam','Jordy','Rafa','Josh/Madison','Mal'];

// take the # of users and divide by # of weeks in a year
const count = Math.ceil(52/users.length);

for (let i = 0; i < count; i++) {
	// create an array of possible weeks in the queue
	let turns = [];
	let names = users[i];
	for (let c = 0; c < count; c++) {
		turns.push(count*c+i);
	};
	obj[names] = turns;
};

// now iterate thru the objects it returned and
// grab the matching person in the current week
Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
	const weeks = obj[val];
	if (weeks.indexOf(weekOfYear)!== -1) {
		console.log('This week\'s queuemaster is: ' + val);
	};
	if (weeks.indexOf(weekOfYear+1)!== -1) {
		console.log('Next week\'s queuemaster is: ' + val);
	};
  }
);