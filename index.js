var moment = require('moment');
var weekOfYear = moment().format("w");

var obj = {};
var users = ['rafa','sam','joe','kayla','nadia','dan','mal','jordy'];

var count = Math.ceil(52/users.length);

for (var i = 0; i < count; i++) {
	var turns = [];
	// var turns = []
	var names = users[i];
	for (var c = 0; c < count; c++) {
		turns.push(count*c);
	};
	obj[names] = turns;
	// console.log(users[i]);
};

console.log(obj);


