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
      if(this.position.distanceTo(this.targetPosition)<this.speed){
        this.targetPosition = null;
        console.log('stopping')
      }
    }
  },
  moveTowardsPosition:function(targetPosition){
    var pixelsPerMove = this.speed;
    var diffX = this.position.xDifference(targetPosition);
    var diffY = this.position.yDifference(targetPosition);

    console.log('diffX', diffX);
    console.log('diffY', diffY);

    var absDiffX = Math.abs(diffX);
    var absDiffY = Math.abs(diffY);

    if( diffX!==0 ){
      if( diffY === 0  ){
        var absMoveX = pixelsPerMove;
      } else {
        var absMoveX = pixelsPerMove * (absDiffX/(absDiffX+absDiffY));
      }
      this.position.x = this.position.x + Math.ceil( math.sign(diffX) * absMoveX );
    }

    if( diffY!==0 ){
      if( diffX === 0  ){
        var absMoveY = pixelsPerMove
      } else {
        var absMoveY = pixelsPerMove * (absDiffY/(absDiffX+absDiffY));
      }
      this.position.y = this.position.y + Math.ceil( math.sign(diffY) * absMoveY );
    } 
  }
})

module.exports = MoveableDisplayObject