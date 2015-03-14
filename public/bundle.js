(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/jay/Programming/JSProjects/learnjsgame/client/main.js":[function(require,module,exports){
var StageView = require('./views/stage_view')

window.onload = function(){
  var editor = ace.edit("editor");
  editor.setOptions({
    minLines: 20
  });
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");
  editor.setValue("Some text in the editor"); 
  editor.resize()
	// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
	var renderer = new PIXI.WebGLRenderer(800, 600);
  var stageView = new StageView(renderer)
	document.body.appendChild(stageView.renderer.view);

 //  var interactive = true;
 //  var stage = new PIXI.Stage(0x66FF99, interactive);

	// var bunnyTexture = PIXI.Texture.fromImage("blob2.png");
	// var bunny = new PIXI.Sprite(bunnyTexture);

	// bunny.position.x = 400;
	// bunny.position.y = 300;

	// bunny.scale.x = 2;
	// bunny.scale.y = 2;

	// stage.addChild(bunny);

	// requestAnimationFrame(animate);

 //  stage.mousedown = function(data){
 //    console.log('mousedown', data)
 //    bunny.position.x = data.global.x;
 //    bunny.position.y = data.global.y;
 //  }

	// function animate() {
	// 	  renderer.render(stage);
	// 	  requestAnimationFrame(animate);
	// }
}


},{"./views/stage_view":"/home/jay/Programming/JSProjects/learnjsgame/client/views/stage_view.js"}],"/home/jay/Programming/JSProjects/learnjsgame/client/views/stage_view.js":[function(require,module,exports){
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
},{}]},{},["/home/jay/Programming/JSProjects/learnjsgame/client/main.js"]);
