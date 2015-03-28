var assert = require("assert");
var expect = require("chai").expect;
var position_constructor = require("../models/position_constructor.js");

it('should have a default position',function(){
  var position = position_constructor.construct();
  expect(position.x).to.equal(0);
  expect(position.y).to.equal(0);
})

it('should be able to set position',function(){
  var position = position_constructor.construct({x:10,y:15});
  expect(position.x).to.equal(10);
  expect(position.y).to.equal(15);
})

it('should be find x differnece from another positions',function(){
  var position = position_constructor.construct({x:10,y:15});
  var targetPosition = position_constructor.construct({x:20,y:15});
  expect(position.xDifference(targetPosition)).to.equal(10);
})

it('should be find y differnece from another positions',function(){
  var position = position_constructor.construct({x:10,y:15});
  var targetPosition = position_constructor.construct({x:10,y:10});
  expect(position.yDifference(targetPosition)).to.equal(-5);
})

it('should be able to find distance to another object',function(){
  var position = position_constructor.construct({x:0,y:0});
  var targetPosition = position_constructor.construct({x:3,y:4});
  expect(position.distanceTo(targetPosition)).to.equal(5);
})
