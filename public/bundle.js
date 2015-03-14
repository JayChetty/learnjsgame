(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/jay/Programming/JSProjects/learnjsgame/client/main.js":[function(require,module,exports){
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

	document.body.appendChild(renderer.view);

  var interactive = true;
  var stage = new PIXI.Stage(0x66FF99, interactive);



  // stage.click(function(data){
  //   console.log('mousdown on stage', data);
  // })

	var bunnyTexture = PIXI.Texture.fromImage("blob2.png");
	var bunny = new PIXI.Sprite(bunnyTexture);

	bunny.position.x = 400;
	bunny.position.y = 300;

	bunny.scale.x = 2;
	bunny.scale.y = 2;

	stage.addChild(bunny);

	requestAnimationFrame(animate);

  stage.mousedown = function(data){
    console.log('mousedown', data)
    bunny.position.x = data.global.x;
    bunny.position.y = data.global.y;
  }

	function animate() {
		  renderer.render(stage);
		  requestAnimationFrame(animate);
	}
}


},{}]},{},["/home/jay/Programming/JSProjects/learnjsgame/client/main.js"]);
