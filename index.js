var moment = require('moment');
var weekOfYear = moment().format("w");

var obj = {};
var users = ['rafa','sam','joe','kayla','nadia','dan','mal','jordy'];

var count = Math.ceil(52/users.length);

for (var i = 0; i < users.length; i++) {
	var names = users[i];
	obj[names] = i;
	// console.log(users[i]);
};
console.log(obj);


