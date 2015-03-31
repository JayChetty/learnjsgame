var Hero = require('../models/hero')

var SpriteView = require('./sprite_view')

var StageView = function(spec){
  //set up stage
  this.drawCount = 0
  this.stage = spec.stage;
  this.renderer = spec.renderer;

  //set up hero
  this.heroSpriteView = spec.heroSpriteView;
  this.heroModel = this.heroSpriteView.model
  this.spriteViews = spec.spriteViews;
  this.stage.addChild(this.heroSpriteView.sprite);
  this.stage.mousedown = function(data){
    this.heroSpriteView.model.target = { position: { x:data.global.x, y:data.global.y }}
  }.bind(this)

  //add other objects
  this.spriteViews.forEach(function(spriteView){
    this.stage.addChild(spriteView.sprite);
    spriteView.sprite.interactive = true;
    spriteView.sprite.mouseup = function(data){
      console.log('data', data);
      console.log(this.stageView.heroModel.see(this.target.model));
      this.stageView.heroSpriteView.model.target = this.target.model
    }.bind({stageView:this, target:spriteView})
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