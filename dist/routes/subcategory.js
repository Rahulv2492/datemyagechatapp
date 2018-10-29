'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _subcategory = require('./../controllers/subcategory/subcategory');

var _subcategory2 = _interopRequireDefault(_subcategory);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });

router.get('/getAllSubcategory', _tockenChecker2.default.ensureAuth, _subcategory2.default.getAllSubcategory);

module.exports = router;