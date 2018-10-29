'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userplaylist = require('./../controllers/userplaylist/userplaylist');

var _userplaylist2 = _interopRequireDefault(_userplaylist);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });

router.get('/getUserPlaylistId', _tockenChecker2.default.ensureAuth, _userplaylist2.default.getUserPlaylistId);
router.get('/getUserPlaylist', _tockenChecker2.default.ensureAuth, _userplaylist2.default.getUserPlaylist);
router.post('/addUserPlaylist', _tockenChecker2.default.ensureAuth, _userplaylist2.default.addUserPlaylist);
router.delete('/deleteUserPlaylist', _tockenChecker2.default.ensureAuth, _userplaylist2.default.deleteUserPlaylist);
// router.put('/updateUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.updateUserPlaylistCategory);

module.exports = router;