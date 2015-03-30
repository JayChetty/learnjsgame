
var SpriteView = function(spec){
  var spec = spec || {}
  this.model = spec.model;
  this.sprite = spec.sprite
  this.model.on('change',function(){
    console.log('model changed')
    this.syncPosition();
  },this)
}


SpriteView.prototype = {
  syncPosition:function(){
    console.log('syncing position')
    this.sprite.position.x = this.model.position.x;
    this.sprite.position.y = this.model.position.y;
  },
}

module.exports = SpriteView