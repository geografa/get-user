var moment = require('moment');
var weekOfYear = parseInt(moment().format("w"));


var obj = {};
var users = ['rafa','sam','joe','kayla','nadia','dan','mal','jordy'];

var count = Math.ceil(52/users.length);

for (var i = 0; i < count; i++) {
	var turns = [];
	// var turns = []
	var names = users[i];
	for (var c = 0; c < count; c++) {
		turns.push(count*c+i);
	};
	obj[names] = turns;
	// console.log(users[i]);
};

// console.log(obj);
Object.getOwnPropertyNames(obj).forEach(
  function (val, idx, array) {
	const weeks = obj[val];
	// console.log(obj[val]);
	// console.log(typeof(weekOfYear));

	// console.log(weeks.indexOf(weekOfYear));
	if (weeks.indexOf(weekOfYear)!== -1) {
		console.log('This week\'s queuemaster is: ' + val);
	};
  }
);
