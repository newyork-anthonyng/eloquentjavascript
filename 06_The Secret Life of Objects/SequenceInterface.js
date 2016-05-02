// nextElement
// currentIndex

function logFive(sequence) {
	var currentElement = sequence.nextElement();

	while(sequence.currentIndex() <= 5 && currentElement !== undefined) {
		console.log(currentElement);

		currentElement = sequence.nextElement();
	}
}

function ArraySeq(sequence) {
	this.sequence = sequence;
	this.index = 0;
}

ArraySeq.prototype.nextElement = function() {
	var result = this.sequence[this.index];
	this.increaseIndex();
	return result;
}

ArraySeq.prototype.currentIndex = function() {
	return this.index;
}

ArraySeq.prototype.increaseIndex = function() {
	this.index++;
	return this.index;
}

//logFive(new ArraySeq([1, 2]));

function RangeSeq(from, to) {
	var myArray = [];

	for(var i = from; i <= to; i++) {
		myArray.push(i);
	}

	ArraySeq.call(this, myArray);
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);

logFive(new RangeSeq(100, 1000));
