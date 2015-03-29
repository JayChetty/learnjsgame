var moveable_object_constructor = require('./moveable_object_constructor');
var position_constructor = require('./position_constructor');
var _ = require('underscore');

var constructorSpec = {
  baseProto: moveable_object_constructor.proto,
  modules: [require('../mixins/seer')],
  initialize:function(spec,spawn){
    spawn.position = spec.position || position_constructor.construct();
    spawn.speed = spec.speed || 1
  }
}
var constructorMaker = require('./constructor_maker')
var construct = constructorMaker.createConstructor(constructorSpec);

module.exports = construct