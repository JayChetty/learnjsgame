MoveableDisplayObject = require('./moveable_display_object');
seerMixin = require('../mixins/seer.js');
var app = require('ampersand-app');
var Hero = MoveableDisplayObject.extend(seerMixin, {
  props: {
    target:'object'
  },
  moveTowardsTarget:function(){
    if(this.target && this.target.position){
      this.moveTowardsPosition(this.target.position)
      if(this.position.distanceTo(this.target.position)<this.speed*5){
        this.arrivedAtTarget()
      }
    }
  },
  arrivedAtTarget:function(){
    app.trigger('display-target', this.target)
    this.target = null;
  }
})

module.exports = Hero