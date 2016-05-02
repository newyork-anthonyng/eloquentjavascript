function MultiplicatorUnitFailure() {};

function primitiveMultiply(a, b) {
	if(Math.random() < 0.5) {
		return a * b;
	} else {
		throw new MultiplicatorUnitFailure();
	}
};

function reliableMultiply(a, b) {
	try {
		return primitiveMultiply(a, b);
	} catch(e) {
		return reliableMultiply(a, b);
	}
}

for(var i = 0; i < 100; i++) {
	console.log(reliableMultiply(8, 8));
}
