var month = (function(){
	var months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var name = function(index) {
		return months[index];
	};

	var number = function(name) {
		return months.indexOf(name);
	}

	return {
		name: name,
		number: number
	}
})();

console.log(month.name(2) === 'March');
console.log(month.number('November') === 10);
