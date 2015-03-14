State = require('ampersand-state');
DisplayObject = require('./display_object');
math = require('../lib/math')
Position = require('./position');

MoveableDisplayObject = DisplayObject.extend({
  props:{
    speed:{
      type:'number',
      default: 1
    },
    targetPosition: Position
  },
  moveTowardsTarget:function(){
    if(this.targetPosition){
      console.log('moving towards target')
      this.moveTowardsPosition(this.targetPosition)
      if(this.position.distanceTo(this.targetPosition)<this.speed*5){
        this.targetPosition = null;
        console.log('stopping')
      }
    }
  },
  moveTowardsPosition:function(targetPosition){
    var pixelsPerMove = this.speed * 5;
    var diffX = this.position.xDifference(targetPosition);
    var diffY = this.position.yDifference(targetPosition);

    console.log('diffX', diffX);
    console.log('diffY', diffY);

    var absDiffX = Math.abs(diffX);
    var absDiffY = Math.abs(diffY);

    var totalDiff = absDiffX + absDiffY

    if( diffX!==0 ){
      if( diffY === 0  ){
        var absMoveX = pixelsPerMove;
      } else {
        var xRatio = absDiffX/totalDiff
        console.log('xratio', xRatio)
        var absMoveX = pixelsPerMove * xRatio;
      }
      var xMove = Math.ceil( math.sign(diffX) * absMoveX );
      console.log('xMove', xMove);
      this.position.x = this.position.x + xMove;
    }

    if( diffY!==0 ){
      if( diffX === 0  ){
        var absMoveY = pixelsPerMove
      } else {
        var yRatio = absDiffY/totalDiff
        console.log('xratio', xRatio)
        var absMoveY = pixelsPerMove * yRatio;
      }
      var yMove = Math.ceil( math.sign(diffY) * absMoveY );
      console.log('yMove', yMove);
      this.position.y = this.position.y + yMove;
    } 
  }
})

module.exports = MoveableDisplayObject