var StageView = function(renderer){
  this.renderer = renderer;
  var interactive = true;
  this.stage = new PIXI.Stage(0x66FF99, interactive);
  var blobTexture = PIXI.Texture.fromImage("blob2.png");
  var blob = new PIXI.Sprite(blobTexture);
  blob.position.x = 400;
  blob.position.y = 300;
  this.stage.addChild(blob);
  requestAnimationFrame(this.animate.bind(this));
  this.stage.mousedown = function(data){
    console.log('mousedown', data)
    blob.position.x = data.global.x;
    blob.position.y = data.global.y;
  }

}

StageView.prototype = {
  animate: function(){
    this.renderer.render(this.stage);
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = StageView;