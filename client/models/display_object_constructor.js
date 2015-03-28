var position_constructor = require('./position_constructor');

var constructor = {
  displayObjectPrototype:{},
  construct:function(spec){
    spec = spec || {};
    var that = Object.create(this.displayObjectPrototype);
    that.position = spec.position || position_constructor.construct();
    return that;
  }
}

module.exports = constructor;