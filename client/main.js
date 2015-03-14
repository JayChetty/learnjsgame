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

