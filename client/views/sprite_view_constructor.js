var constructorSpec = {
  proto:{
    syncPosition:function(){
      this.sprite.position.x = this.model.position.x;
      this.sprite.position.y = this.model.position.y;
    }
  },
  initialize:function(spec,spawn){
    spawn.model = spec.model;
    spawn.sprite = spec.sprite
  }
}
var constructorMaker = require('../models/constructor_maker')
var construct = constructorMaker.createConstructor(constructorSpec);

module.exports = construct