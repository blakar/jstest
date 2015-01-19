/* Tests from http://singlebrook.com/blog/simplify-your-javascript-with-underscorejs */


QUnit.test('Test from singlebrook.com site', function(assert){

  // complex object
  var jossWhedon = 
  { 
    age: 49, 
    occupations: ["writer", "director", "producer", "composer", "actor"], 
    shows: [ 
      { 
        title: "Dollhouse", 
        femaleLead: true, 
        characters: [ 
          { name: "Echo", role: "doll" }, 
          { name: "Topher", role: "mad scientist" } ] }, 
      { 
        title: "Dr. Horrible's Sing-Along Blog", 
        characters: [ 
          { name: "Billy", role: "mad scientist" }, 
          { name: "Penny", role: "love interest" } ] }, 
      { 
        title: "Buffy the Vampire Slayer", 
        femaleLead: true, 
        characters: [ 
          { name: "Buffy", role: "slayer" }, 
          { name: "Angel", role: "love interest" } ] }, 
      { 
        title: "Firefly", 
        characters: [ 
          { name: "Mal", role: "captain" }, 
          { name: "Kaylee", role: "mechanic" } ] } 
      ] 
    };

  // use map (without underscore)
  var showNames1 = jossWhedon.shows.map(function(show) { return show.title; });
  assert.strictEqual(showNames1.length, 4, 'correct number of items');
  assert.strictEqual(showNames1[3], 'Firefly', 'correct item');

  // pluck creates an array of property values
  var showNames2 = _.pluck(jossWhedon.shows, "title");
  assert.strictEqual(showNames2.length, 4, 'correct number of items');
  assert.strictEqual(showNames2[3], 'Firefly', 'correct item');

  // findwhere returns the first value in a list that matches all of
  // the listed key-value pairs

  // => without underscore
  // for(var i = 0; i < jossWhedon.shows.length; i++) {
  //   if (jossWhedon.shows[i].title === 'Firefly') {
  //      var show = jossWhedon.shows[i];
  //   }
  // }

  // same thing with underscore _.findWhere
  var show = _.findWhere(jossWhedon.shows, {title: 'Firefly'});
  assert.strictEqual(show.title, 'Firefly', 'correct title');
  assert.strictEqual(show.characters.length, 2, 'correct number of characters');  

  // reduce condenses a list of values into a single value, just like
  // JavaScript's native reduce method. We can use it to give us one 
  // array containing all of Whedon's characters.
  var charList = _.reduce(jossWhedon.shows, function(memo, show) {
    return memo.concat(show.characters);
  }, []);

  assert.strictEqual(charList[0].name, 'Echo', 'First character');
  assert.strictEqual(charList[1].name, 'Topher', 'Second character');
  assert.strictEqual(charList[2].name, 'Billy', 'Third character');
  assert.strictEqual(charList[3].name, 'Penny', 'Fourth character');
  assert.strictEqual(charList[4].name, 'Buffy', 'Fifth character');
  assert.strictEqual(charList[5].name, 'Angel', 'Sixth character');
  assert.strictEqual(charList[6].name, 'Mal', 'Seventh character');
  assert.strictEqual(charList[7].name, 'Kaylee', 'Eight character');

  // let's say you want to generate an array of all shows with female
  // leads
  var resultShows = _.pluck(_.filter(jossWhedon.shows, function(show){
    return show.femaleLead;
  }), "title");
  
  assert.strictEqual(resultShows[0], 'Dollhouse');
  assert.strictEqual(resultShows[1], 'Buffy the Vampire Slayer');

  // counting characters
  var counts = _.countBy(_.flatten(_.pluck(jossWhedon.shows, 'characters')), 'role');

  assert.strictEqual(counts.doll, 1, 'doll count');
  assert.strictEqual(counts['mad scientist'], 2, 'mad scientist');
  assert.strictEqual(counts['love interest'], 2, 'love interests');
  assert.strictEqual(counts.slayer, 1, 'slayers');
  assert.strictEqual(counts.captain, 1, 'captains');
  assert.strictEqual(counts.mechanic, 1, 'mechanics');

  // list all the mad scients - we want a single object with each
  // pertinent show as a key and its mad scientist as its value
  var isMadScientist = function(character) { return character.role === "mad scientist" }; 
  var madList = _.reduce(jossWhedon.shows, function(memo, show) { 
    if (_.some(show.characters, isMadScientist)) {       memo[show.title] = _.detect(show.characters, isMadScientist).name; 
    } 
    
    return memo; 
   }, {});
  

});