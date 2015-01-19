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