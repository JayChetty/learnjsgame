var position_constructor = require('./position_constructor');

var constructorSpec = {
  initialize:function(spec,spawn){
    spawn.position = spec.position || position_constructor.construct();
  }
}
var constructorMaker = require('./constructor_maker')
var construct = constructorMaker.createConstructor(constructorSpec);

module.exports = construct