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
}

