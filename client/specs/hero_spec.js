var assert = require("assert");
var expect = require("chai").expect;
var Hero = require("../models/hero.js");

it('should have a default position',function(){
  var hero = new Hero();
  expect(hero.position.x).to.equal(0);
  expect(hero.position.y).to.equal(0);
})

it('should be abe to have a target',function(){
  var moveableDisplayObject = new Hero();
  moveableDisplayObject.target = {position:{x:100,y:0}};
  expect(moveableDisplayObject.target.position.x).to.equal(100);
  expect(moveableDisplayObject.target.position.y).to.equal(0);
})

it('should be abe to move torwards target position',function(){
  var moveableDisplayObject = new Hero();
  moveableDisplayObject.target = {position:{x:100,y:0}};
  moveableDisplayObject.moveTowardsTarget();
  expect(moveableDisplayObject.position.y).to.equal(0);
  expect(moveableDisplayObject.position.x).to.equal(5);
})

it('should be a seer', function(){
  var hero = new Hero();
  expect(hero.see({a:1,b:2})).to.equal("{\"a\":1,\"b\":2}")
})