'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./../controllers/user/user');

var _user2 = _interopRequireDefault(_user);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });

router.post('/addUserDetails', _user2.default.addUserDetails);
router.get('/getAllUsers', _user2.default.getAllUsers);
// router.put('/uploadProfilePicture', checkToken.ensureAuth, user.uploadProfilePicture);

module.exports = router;