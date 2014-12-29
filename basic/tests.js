QUnit.test( "hello test", function( assert ) {  
	assert.ok( 1 == "1", "Passed!" );
});


QUnit.test("Addition works", function(assert){
	assert.strictEqual(1+1, 2, "1+1 === 2");
});

QUnit.test("Addition works", function(assert){
	assert.equal(10+10, 20, "10+10 == 20");
});

QUnit.test("Zero is false (non-strict)", function(assert){
	assert.equal(0, false, "0 == false");
});

QUnit.test("Zero is strictly not false", function(assert){
	assert.notStrictEqual(0, false, "0 !=== false");
});
