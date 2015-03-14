var MoveableDisplayObject = require('../models/moveable_display_object')

var StageView = function(renderer){
  this.drawCount = 0
  this.renderer = renderer;
  var interactive = true;
  this.stage = new PIXI.Stage(0x66FF99, interactive);
  var blobTexture = PIXI.Texture.fromImage("blob2.png");
  this.blob = new PIXI.Sprite(blobTexture);

  this.blobModel = new MoveableDisplayObject({speed: 1})
  this.stage.addChild(this.blob);
  requestAnimationFrame(this.animate.bind(this));

  this.stage.mousedown = function(data){
    console.log('mousedown', data)
    // blob.position.x = data.global.x;
    // blob.position.y = data.global.y; 
    this.blobModel.targetPosition = { x:data.global.x, y:data.global.y }
  }.bind(this)

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
    this.blobModel.moveTowardsTarget();
  },
  setViewPositions: function(){
    this.blob.position.x = this.blobModel.position.x;
    this.blob.position.y = this.blobModel.position.y;
  }
}

module.exports = StageView;