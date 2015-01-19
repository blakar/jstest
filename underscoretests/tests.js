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
QUnit.test("pluck test", function(assert){
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
QUnit.test("map test", function(assert){
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

// Uniq - loops over an array and removes all duplicate elements, providing only
// unique elements
QUnit.test('uniq test', function(assert){
	var scores = [23, 41, 23, 23, 41];
	var result = _.uniq(scores);
	
	assert.strictEqual(result.length, 2, 'Correct number of items');
	assert.strictEqual(result[0], 23, 'First unique item');
	assert.strictEqual(result[1], 41, 'Second unique item');
});

// range - creates a range or list of numbers
QUnit.test('range test', function(assert){
	var tens = _.range(0, 100, 10);
	
	assert.strictEqual(tens.length, 10, 'Correct number of items');
	assert.strictEqual(tens[0], 0, 'First item');
	
	for(var i = 0; i < 10; ++i){
		assert.strictEqual(tens[i], i * 10, 'Correct item');
	}
});

// intersection - this method compares two arrays to each other and returns the
// list of elements that are found in all of the passed arrays
QUnit.test('intersection test', function(assert){
	var tens = _.range(0, 100, 10);
	var eights = _.range(0, 100, 8);
	var fives = _.range(0, 100, 5);
	
	var common = _.intersection(tens, eights, fives);
	
	assert.strictEqual(common.length, 3, 'Correct number of intersected items');
	assert.strictEqual(common[0], 0, 'First item');
	assert.strictEqual(common[1], 40, 'Second item');
	assert.strictEqual(common[2], 80, 'Third item');
});

// keys and values
QUnit.test('keys and values test', function(assert){
	var car = {
		make: 'Ford',
		model: 'Focus',
		year: '2012',
		color: 'red'
	};
	
	var keys = _.keys(car);
	var values = _.values(car);
	
	assert.strictEqual(keys.length, 4, 'Correct number of keys');
	assert.strictEqual(values.length, 4, 'Correct number of values');
	
	assert.strictEqual(keys[0], 'make', 'First key is correct');
	assert.strictEqual(values[0], 'Ford', 'First value is correct');
	
	assert.strictEqual(keys[3], 'color', 'Last key is correct');
	assert.strictEqual(values[3], 'red', 'First value is correct');
});

// method that is useful when you need to create objects with sensible defaults
// when some may not be used when creating it
QUnit.test('defaults test', function(assert){
	var car = { make: 'Ford', model: 'Focus'};
	var defaults = 
	{
		make: 'Ford',
		model: 'Focus',
		year: 2015,
		color: 'red'
	};
	
	_.defaults(car, defaults);
	
	assert.strictEqual(car.make, 'Ford', 'Car make is correct');
	assert.strictEqual(car.model, 'Focus', 'Car model is correct');
	assert.strictEqual(car.year, 2015, 'Car year is correct');
	assert.strictEqual(car.color, 'red', 'Car color is correct');
});

// _.each
//QUnit.test('each test', function(assert){
//	var list = [1, 2, 3, 4, 5];
//	_.each(list, function(x){ console.log();});
//});

// _.map (aka _.collect) - produces a new arrray of values by mapping each value
// in list through a transformation function
QUnit.test('map test', function(assert){
	var list = [1, 2, 3];
	var triples = _.map(list, function(num){ return num * 3; });
	
	assert.strictEqual(triples.length, 3, 'Correct list length');
	assert.strictEqual(triples[0], 3, 'First item');
	assert.strictEqual(triples[1], 6, 'Second item');
	assert.strictEqual(triples[2], 9, 'Third item');
});

// _.reduce -- boils down a list of values into a single value. memo is the 
// initial state of the reduction
QUnit.test('reduce test', function(assert){
	var list = [1, 2, 3];
	var sum = _.reduce(list, function(memo, num) { return memo + num; }, 0);
	assert.strictEqual(sum, 6, 'Reduce list to a sum');
});