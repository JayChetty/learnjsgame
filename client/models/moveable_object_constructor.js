var position_constructor = require('./position_constructor');
var display_object_constructor = require('./display_object_constructor');
var _ = require('underscore');
math = require('../lib/math')

var constructorSpec = {
  baseProto: display_object_constructor.proto,
  proto:{
    moveTowardsTarget:function(){
      if(this.targetPosition){
        this.moveTowardsPosition(this.targetPosition)
        if(this.position.distanceTo(this.targetPosition)<this.speed*5){
          this.targetPosition = null;
        }
      }
    },
    moveTowardsPosition:function(targetPosition){
      var pixelsPerMove = this.speed * 5;
      var diffX = this.position.xDifference(targetPosition);
      var diffY = this.position.yDifference(targetPosition);

      var absDiffX = Math.abs(diffX);
      var absDiffY = Math.abs(diffY);

      var totalDiff = absDiffX + absDiffY

      if( diffX!==0 ){
        if( diffY === 0  ){
          var absMoveX = pixelsPerMove;
        } else {
          var xRatio = absDiffX/totalDiff
          var absMoveX = pixelsPerMove * xRatio;
        }
        var xMove = Math.ceil( math.sign(diffX) * absMoveX );
        this.position.x = this.position.x + xMove;
      }

      if( diffY!==0 ){
        if( diffX === 0  ){
          var absMoveY = pixelsPerMove
        } else {
          var yRatio = absDiffY/totalDiff
          var absMoveY = pixelsPerMove * yRatio;
        }
        var yMove = Math.ceil( math.sign(diffY) * absMoveY );
        this.position.y = this.position.y + yMove;
      } 
    }  
  },
  initialize:function(spec,spawn){
    spawn.position = spec.position || position_constructor.construct();
    spawn.speed = spec.speed || 1
  }
}
var constructorMaker = require('./constructor_maker')
var construct = constructorMaker.createConstructor(constructorSpec);

module.exports = construct