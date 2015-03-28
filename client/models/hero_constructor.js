var moveable_object_constructor = require('./moveable_object_constructor');
var position_constructor = require('./position_constructor');
var _ = require('underscore');
var seer = require('../mixins/seer');

var constructor = {

  heroPrototype:function(){
    if(!this.proto){
      this.proto = _.extend({},seer,moveable_object_constructor.displayObjectPrototype)
    }
    return this.proto;
  },
  construct:function(spec){
    spec = spec || {};
    var that = Object.create(this.heroPrototype());
    that.position = spec.position || position_constructor.construct();
    return that;
  }
}

module.exports = constructor;