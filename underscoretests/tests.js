/* Tests from http://code.tutsplus.com/tutorials/getting-cozy-with-underscorejs--net-24581 */


QUnit.test("select test", function(assert){
	var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 43];
	var topScorers = [];
	var scoreLimit = 90;

	topScorers = _.select(scores, function(score) { return score > scoreLimit; });

	assert.strictEqual(topScorers.length, 3, "Number of items is correct");
	assert.strictEqual(topScorers[0], 99, "First item is correct");
	assert.strictEqual(topScorers[1], 91, "Second item is correct");
	assert.strictEqual(topScorers[2], 95, "Third item is correct");
});


// same as above but more OO approach
QUnit.test("select test 2", function(assert){
	var scores = [7, 23, 91, 8, 11, 3, 15, 8];

	var evenScores = _(scores).select(function(score) { return score % 2 == 0; });

	assert.strictEqual(evenScores.length, 2, "Number of items returned is correct");
	assert.strictEqual(evenScores[0], 8, "First item is correct");
	assert.strictEqual(evenScores[1], 8, "Second item is correct");
});

// pluck - extracting specific property from each object
QUnit.test("select test 2", function(assert){
	var locations =
	[
		{city: 'Seattle', state: 'Washington'},
		{city: 'New York City', state: 'New York'},
		{city: 'Los Angeles', state: 'California'},
		{city: 'Anchorage', state: 'Alaska'},
		{city: 'Austin', state: 'Texas'},
	];
	
	var cities = _.pluck(locations, 'city');
	var states = _.pluck(locations, 'state');
	
	assert.strictEqual(cities.length, 5, "Correct number of cities");
	assert.strictEqual(cities[0], 'Seattle', 'First city is correct');
	assert.strictEqual(cities[2], 'Los Angeles', 'Third city is correct');
	assert.strictEqual(states.length, 5, 'Correct number of states');
	assert.strictEqual(states[0], 'Washington', 'First state is correct');
	assert.strictEqual(states[4], 'Texas', 'Fifth state is correct');
});

// Map creates an array from a collection where each element can be mutated or
// otherwise changed through a function
QUnit.test("select test 2", function(assert){
	var locations =
	[
		{city: 'Seattle', state: 'Washington'},
		{city: 'New York City', state: 'New York'},
		{city: 'Los Angeles', state: 'California'},
		{city: 'Anchorage', state: 'Alaska'},
		{city: 'Austin', state: 'Texas'},
	];
	
	var names = _(locations).pluck('city').map(function(value){return value.toUpperCase()});
	
	assert.strictEqual(names.length, 5, 'Correct number of items');
	assert.strictEqual(names[0], 'SEATTLE', 'First item correctly modified');
	assert.strictEqual(names[2], 'LOS ANGELES', 'Third item correctly modified');
});

// All is useful if you need to check every value in a collection passes a certain
// criteria
QUnit.test('all test', function(assert){
	var scores = [63, 89, 69, 80, 72, 52, 91];
	var passed = _(scores).all(function(value) {return value > 50 && value < 100; });
	
	assert.strictEqual(passed, true, 'all passed');
});