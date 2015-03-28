var constructor = {
  positionPrototype:{
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
  construct:function(spec){
    spec = spec || {}
    var that = Object.create(this.positionPrototype);
    that.x = spec.x || 0;
    that.y = spec.y || 0;
    return that;
  }
}

module.exports = constructor;