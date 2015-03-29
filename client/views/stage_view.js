var heroConstructor = require('../models/hero_constructor')
var spriteViewConstructor = require('./sprite_view_constructor')
var DisplayObjectConstructor = require('../models/display_object_constructor')

var StageView = function(renderer){
  this.drawCount = 0
  this.renderer = renderer;
  var interactive = true;
  this.stage = new PIXI.Stage(0x66FF99, interactive);

  var blobTexture = PIXI.Texture.fromImage("blob2.png");
  this.heroSprite = new PIXI.Sprite(blobTexture);
  this.heroSprite.interactive = true;

  this.doorSprite = new PIXI.Sprite(blobTexture);
  this.doorSprite.interactive = true;
  this.doorSprite.position.x = 100;
  this.doorSprite.position.y = 100;

  this.stage.mouseup = function(data){
    this.heroModel.targetPosition = { x:data.global.x, y:data.global.y }
  }.bind(this)

  this.doorSprite.mousedown = function(){
    console.log('doorSpriteClick');
    console.log(this.heroModel.see({a:1,b:2}));
  }.bind(this);

  this.heroSprite.mousedown = function(){
    console.log('heroSpriteClick');
  }.bind(this);

  this.heroModel = heroConstructor.construct({speed: 1})
  this.heroSpriteView = spriteViewConstructor.construct({sprite:this.heroSprite, model:this.heroModel})
  this.stage.addChild(this.heroSprite);
  this.stage.addChild(this.doorSprite)
  requestAnimationFrame(this.animate.bind(this));
}

StageView.prototype = {
  animate: function(){
    if (this.drawCount%1===0){
      this.updateModelPositions();
    }
    this.setViewPositions();
    this.renderer.render(this.stage);
    requestAnimationFrame(this.animate.bind(this));
    this.drawCount++;
  },
  updateModelPositions:function(){
    this.heroModel.moveTowardsTarget();
  },
  setViewPositions: function(){
    this.heroSpriteView.syncPosition();
  }
}

module.exports = StageView;