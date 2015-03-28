var constructorSpec = {
  proto:{
    xDifference: function(targetPosition){
      return targetPosition.x - this.x;
    },
    yDifference: function(targetPosition){
      return targetPosition.y - this.y;
    },

    distanceTo: function(targetPosition){
      var absdiffX = Math.abs(this.xDifference(targetPosition));
      var absdiffY = Math.abs(this.yDifference(targetPosition));
      return Math.sqrt(Math.pow(absdiffX,2) + Math.pow(absdiffY,2));
    }      
  },
  initialize:function(spec,spawn){
    spawn.x = spec.x || 0;
    spawn.y = spec.y || 0;
  }
}
var constructorMaker = require('./constructor_maker')
var construct = constructorMaker.createConstructor(constructorSpec);

module.exports = construct