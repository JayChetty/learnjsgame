var assert = require("assert");
var expect = require("chai").expect;
var display_object_constructor = require('../models/display_object_constructor')

it('should have a default position',function(){
  var displayObject = display_object_constructor.construct();
  expect(displayObject.position.x).to.equal(0);
  expect(displayObject.position.y).to.equal(0);
})