var assert = require("assert");
var expect = require("chai").expect;
var hero_constructor = require("../models/hero_constructor.js");

it('should have a default position',function(){
  var hero = hero_constructor.construct();
  expect(hero.position.x).to.equal(0);
  expect(hero.position.y).to.equal(0);
})

it('should be a seer', function(){
  var hero = hero_constructor.construct();
  console.log('hero',hero.see)
  expect(hero.see({a:1,b:2})).to.equal("{\"a\":1,\"b\":2}")
})