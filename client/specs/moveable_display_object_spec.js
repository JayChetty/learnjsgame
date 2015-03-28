var assert = require("assert");
var expect = require("chai").expect;
var moveable_object_constructor = require("../models/moveable_object_constructor.js");
var position_constructor = require("../models/position_constructor.js");

it('should have a default position',function(){
  var moveableDisplayObject = moveable_object_constructor.construct()
  expect(moveableDisplayObject.position.x).to.equal(0);
  expect(moveableDisplayObject.position.y).to.equal(0);
})

it('should a default speed',function(){
  var moveableDisplayObject = moveable_object_constructor.construct()
  expect(moveableDisplayObject.speed).to.equal(1);
})

it('should be able to move towards a position',function(){
  var moveableDisplayObject = moveable_object_constructor.construct()
  var targetPosition = position_constructor.construct({x:100,y:0});
  moveableDisplayObject.moveTowardsPosition(targetPosition);
  expect(moveableDisplayObject.position.y).to.equal(0);
  expect(moveableDisplayObject.position.x).to.equal(5);
})

it('should be abe to have a target position',function(){
  var moveableDisplayObject = moveable_object_constructor.construct()
  moveableDisplayObject.targetPosition = {x:100,y:0};
  expect(moveableDisplayObject.targetPosition.x).to.equal(100);
  expect(moveableDisplayObject.targetPosition.y).to.equal(0);
})

it('should be abe to move torwards target position',function(){
  var moveableDisplayObject = moveable_object_constructor.construct()
  moveableDisplayObject.targetPosition = {x:100,y:0};
  moveableDisplayObject.moveTowardsTarget();
  expect(moveableDisplayObject.position.y).to.equal(0);
  expect(moveableDisplayObject.position.x).to.equal(5);
})