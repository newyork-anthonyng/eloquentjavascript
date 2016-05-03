// 1. car and cat

verify(/ca[rt]/,
	['my car', 'bad cats'],
	['camper', 'high art']);

// 2. pop and prop
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

// 3. ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// 4. Any word ending in ious
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// 5. A whitespace character followed by a dot, comma, colon or semicolon
verify(/\s(\.|\,|\:|\;)/,
       ["bad punctuation ."],
       ["escape the dot"]);

// 6. A word longer than six letters
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

// 7. A word without the letter e
verify(/\b[a-df-z]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
	// Ignore unfinished exercises
	if(regexp.source == '...') return;

	yes.forEach(function(s) {
		if(!regexp.test(s)) {
			console.log('Failure to match "' + s + '"');
		}
	});

	no.forEach(function(s) {
		if(regexp.test(s)) {
			console.log('Unexpected match for "' + s + '"');
		}
	});

	console.log('Verification completed!');
}
