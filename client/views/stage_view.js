var Hero = require('../models/hero')
var DisplayObject = require('../models/display_object')
var SpriteView = require('./sprite_view')

var StageView = function(renderer){
  this.drawCount = 0
  this.renderer = renderer;
  var interactive = true;
  this.stage = new PIXI.Stage(0x66FF99, interactive);

  var blobTexture = PIXI.Texture.fromImage("blob2.png");
  this.heroSprite = new PIXI.Sprite(blobTexture);

  this.doorSprite = new PIXI.Sprite(blobTexture);

  this.doorSprite.position.x = 100;
  this.doorSprite.position.y = 100;

  this.heroModel = new Hero({speed: 1})
  this.heroView = new SpriteView({ model:this.heroModel, sprite:this.heroSprite})

  this.stage.addChild(this.heroSprite);
  this.stage.addChild(this.doorSprite)
  requestAnimationFrame(this.animate.bind(this));

  this.stage.mouseup = function(data){
    this.heroModel.targetPosition = { x:data.global.x, y:data.global.y }
  }.bind(this)

}

StageView.prototype = {
  animate: function(){
    if (this.drawCount%1===0){
      this.updateModelPositions();
    }
    this.renderer.render(this.stage);
    requestAnimationFrame(this.animate.bind(this));
    this.drawCount++;
  },
  updateModelPositions:function(){
    this.heroModel.moveTowardsTarget();
  },
}

module.exports = StageView;