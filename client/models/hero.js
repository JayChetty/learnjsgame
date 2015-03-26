MoveableDisplayObject = require('./moveable_display_object');
seerMixin = require('../mixins/seer.js')
var Hero = MoveableDisplayObject.extend(seerMixin, {})

module.exports = Hero