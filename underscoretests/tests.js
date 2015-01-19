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


