'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userPlaylistcategory = require('./../controllers/userPlaylistcategory/userPlaylistcategory');

var _userPlaylistcategory2 = _interopRequireDefault(_userPlaylistcategory);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });

router.get('/getUserPlaylistCategory', _tockenChecker2.default.ensureAuth, _userPlaylistcategory2.default.getUserPlaylistCategory);
router.post('/addUserPlaylistCategory', _tockenChecker2.default.ensureAuth, _userPlaylistcategory2.default.addUserPlaylistCategory);
router.delete('/deleteUserPlaylistCategory', _tockenChecker2.default.ensureAuth, _userPlaylistcategory2.default.deleteUserPlaylistCategory);
router.put('/updateUserPlaylistCategory', _tockenChecker2.default.ensureAuth, _userPlaylistcategory2.default.updateUserPlaylistCategory);

module.exports = router;