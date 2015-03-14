State = require('ampersand-state');
DisplayObject = require('./display_object');
math = require('../lib/math')

MoveableDisplayObject = DisplayObject.extend({
  props:{
    speed:'number'
  },
  moveTowardsPosition:function(targetPosition){
    var pixelsPerMove = 10
    var diffX = this.position.xDifference(targetPosition);
    var diffY = this.position.yDifference(targetPosition);

    var absDiffX = Math.abs(diffX);
    var absDiffY = Math.abs(diffY);

    if( diffX!==0 ){
      if( diffY === 0  ){
        var absMoveX = pixelsPerMove
      } else {
        var absMoveX = pixelsPerMove/(absDiffX/absDiffY);
      }
      this.position.x = this.position.x + ( math.sign(diffX) * absMoveX );
    }

    if( diffY!==0 ){
      if( diffX === 0  ){
        var absMoveY = pixelsPerMove
      } else {
        var absMoveY = pixelsPerMove/(absDiffY/absDiffX);
      }
      this.position.y = this.position.y + ( math.sign(diffY) * absMoveY );
    } 
  }
})

module.exports = MoveableDisplayObject