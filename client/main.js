var StageView = require('./views/stage_view');
var DisplayObject = require('./models/display_object');
var Hero = require('./models/hero')
var SpriteView = require('./views/sprite_view');
var app = require('ampersand-app');

window.onload = function(){
  var editor = ace.edit("editor");
  editor.setOptions({
    minLines: 20
  });
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");
  editor.setValue("Some text in the editor"); 
  editor.resize()
  app.on('display-target',function(target){
    console.log('target', target)
    editor.setValue("Now at target yo");
    actionEl = document.querySelector('#actions');
    console.log('actionEl')
    actionEl.innerHTML = "";
    skills = {talk:"", laugh:""};
    for (skill in target.actions){
      var skillItem = window.document.createElement('li');
      var skillButton = window.document.createElement('a');
      // skillButton.addEventListener('click',this.skillClicked,false);
      skillButton.innerHTML = skill;
      skillItem.appendChild(skillButton);
      actionEl.appendChild(skillItem);
    }
  })
	// You can use either PIXI.WebGLRenderer or PIXI.CanvasRenderer
	var renderer = new PIXI.WebGLRenderer(800, 600);
  var blobTexture = PIXI.Texture.fromImage("blob2.png");
  
  //set up models
  var heroModel = new Hero({speed: 1})
  var doorModel = new DisplayObject({speed: 1, position:{x:100,y:100}})

  doorModel.actions = {
    open:function(){
      console.log('open the door, fall on the floor..')
    }
  }
  //and sprites
  var heroSprite = new PIXI.Sprite(blobTexture);
  var doorSprite = new PIXI.Sprite(blobTexture);

  //create views
  var spriteViews = [];
  var doorView = new SpriteView({ model:doorModel, sprite:doorSprite });
  spriteViews.push(doorView);
  var heroView = new SpriteView({ model:heroModel, sprite:heroSprite });

  //create stage
  var interactive = true;
  var stage = new PIXI.Stage(0x66FF99, interactive);

  //create view for the stage and sprites
  var stageView = new StageView({
    renderer:renderer,
    heroSpriteView: heroView,
    stage: stage,
    spriteViews:spriteViews,
  })

	document.body.appendChild(stageView.renderer.view);
}

