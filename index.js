var moment = require('moment');
var weekOfYear = parseInt(moment().format("w"));

var obj = {};

// users active in the support queue 
var users = ['rafa','sam','joe','kayla','nadia','dan','mal','jordy'];

// take the # of users and divide by # of weeks in a year
var count = Math.ceil(52/users.length);

for (var i = 0; i < count; i++) {
	// create an array of possible weeks in the queue
	var turns = [];
	var names = users[i];
	for (var c = 0; c < count; c++) {
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