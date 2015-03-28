var _ = require('underscore');
module.exports = {
  createConstructor: function(spec){
    var spec = spec || {}
    var constructor = {};
    //Create Prototype
    var proto = {}
    var baseProto = spec.baseProto || {}
    _.extend(proto,baseProto)
    var modules = spec.modules || []
    modules.forEach(function(module){
      _.extend(proto,module)}
    )
    var manualProto = spec.proto || {}
    _.extend(proto, manualProto)
    //save on constructor
    constructor.proto = proto

    constructor.construct = function(construtSpec){
      var construtSpec = construtSpec || {};
      var spawn = Object.create(proto)
      spec.initialize(construtSpec, spawn)
      return spawn;
    }

    return constructor;
  }
}