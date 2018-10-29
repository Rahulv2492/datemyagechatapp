'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _category = require('./../controllers/category/category');

var _category2 = _interopRequireDefault(_category);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });

router.get('/getAllCategory', _tockenChecker2.default.ensureAuth, _category2.default.getAllCategory);

module.exports = router;