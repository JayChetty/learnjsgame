var Hero = require('../models/hero')

var SpriteView = require('./sprite_view')

var StageView = function(spec){
  //set up stage
  this.drawCount = 0
  this.stage = spec.stage;
  this.renderer = spec.renderer;

  //set up hero
  this.heroSpriteView = spec.heroSpriteView;
  this.spriteViews = spec.spriteViews;
  this.stage.addChild(this.heroSpriteView.sprite);
  this.stage.mouseup = function(data){
    this.heroSpriteView.model.targetPosition = { x:data.global.x, y:data.global.y }
  }.bind(this)

  //add other objects
  this.spriteViews.forEach(function(spriteView){
    this.stage.addChild(spriteView.sprite);
  },this)

  //start animation
  requestAnimationFrame(this.animate.bind(this));
}

StageView.prototype = {
  animate: function(){
    if (this.drawCount%1===0){
      this.updateHeroPosition();
    }
    this.renderer.render(this.stage);
    requestAnimationFrame(this.animate.bind(this));
    this.drawCount++;
  },
  updateHeroPosition:function(){
    this.heroSpriteView.model.moveTowardsTarget();
  },
}

module.exports = StageView;