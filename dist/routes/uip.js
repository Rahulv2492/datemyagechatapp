'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _uip = require('./../controllers/uip/uip');

var _uip2 = _interopRequireDefault(_uip);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });

router.get('/checkAccess', _uip2.default.validateUIP);

module.exports = router;