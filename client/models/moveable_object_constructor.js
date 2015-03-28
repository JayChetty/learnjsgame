var position_constructor = require('./position_constructor');
var display_object_constructor = require('./display_object_constructor');
var _ = require('underscore');
math = require('../lib/math')

var constructor = {

  moveableObjectPrototype:function(){
    var ownProto = {
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
    }
    if(!this.proto){
      this.proto = _.extend(ownProto,display_object_constructor.displayObjectPrototype)
    }
    return this.proto;
  },
  construct:function(spec){
    spec = spec || {};
    var that = Object.create(this.moveableObjectPrototype());
    that.position = spec.position || position_constructor.construct();
    that.speed = spec.speed || 1
    return that;
  }
}

module.exports = constructor;